import * as THREE from 'three';
import { useRef, useState, useEffect, memo, ReactNode, useMemo } from 'react';
import { Canvas, createPortal, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
  Environment,
  Sparkles
} from '@react-three/drei';
import { easing } from 'maath';

type Mode = 'lens' | 'bar' | 'cube';

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas 
      camera={{ position: [0, 0, 20], fov: 15 }} 
      gl={{ 
        alpha: true, 
        antialias: true, 
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
    >
      <color attach="background" args={['#0a0a14']} />
      <fog attach="fog" args={['#0a0a14', 15, 35]} />
      
      {/* Premium multi-layered lighting */}
      <AmbientLighting />
      
      {/* Ultra-premium environment for realistic reflections */}
      <Environment preset="city" />
      
      {/* Multi-layered particle systems for depth and luxury */}
      <Sparkles count={150} scale={20} size={2.5} speed={0.4} opacity={0.4} color="#a855f7" />
      <Sparkles count={80} scale={25} size={3.5} speed={0.25} opacity={0.3} color="#ec4899" />
      <Sparkles count={60} scale={30} size={4} speed={0.15} opacity={0.25} color="#06b6d4" />
      <Sparkles count={40} scale={15} size={1.5} speed={0.5} opacity={0.5} color="#fbbf24" />
      
      <ScrollControls damping={0.12} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems as NavItem[]} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

// Premium dynamic lighting with smooth color transitions and movement
function AmbientLighting() {
  const light1 = useRef<THREE.PointLight>(null!);
  const light2 = useRef<THREE.PointLight>(null!);
  const light3 = useRef<THREE.PointLight>(null!);
  const light4 = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Smooth circular motion for primary lights
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.25) * 10;
      light1.current.position.y = Math.cos(t * 0.25) * 10;
      light1.current.intensity = 2.5 + Math.sin(t * 0.4) * 0.8;
    }
    
    if (light2.current) {
      light2.current.position.x = Math.sin(t * 0.35 + Math.PI) * 8;
      light2.current.position.y = Math.cos(t * 0.35 + Math.PI) * 8;
      light2.current.intensity = 2.5 + Math.cos(t * 0.6) * 0.8;
    }
    
    if (light3.current) {
      light3.current.position.x = Math.sin(t * 0.18 + Math.PI / 2) * 12;
      light3.current.position.y = Math.cos(t * 0.18 + Math.PI / 2) * 12;
      light3.current.intensity = 2 + Math.sin(t * 0.5) * 0.6;
    }

    // Accent light with figure-8 motion
    if (light4.current) {
      light4.current.position.x = Math.sin(t * 0.3) * 6;
      light4.current.position.y = Math.sin(t * 0.6) * 6;
      light4.current.intensity = 1.8 + Math.cos(t * 0.7) * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight ref={light1} position={[5, 5, 5]} color="#a855f7" intensity={2.5} distance={25} decay={2} />
      <pointLight ref={light2} position={[-5, -5, 5]} color="#ec4899" intensity={2.5} distance={25} decay={2} />
      <pointLight ref={light3} position={[0, 0, 10]} color="#06b6d4" intensity={2} distance={30} decay={2} />
      <pointLight ref={light4} position={[0, 0, 8]} color="#fbbf24" intensity={1.8} distance={20} decay={2} />
    </>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const bgRef = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);
  const [hovered, setHovered] = useState(false);
  const scaleMultiplier = useRef(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
  }, [nodes, geometryKey]);

  // Ultra-premium gradient background with complex color mixing
  const gradientMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: buffer.texture }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform sampler2D uTexture;
        varying vec2 vUv;
        
        // Smooth noise function for organic movement
        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        void main() {
          vec2 uv = vUv;
          
          // Premium gradient colors - vibrant and luxurious
          vec3 color1 = vec3(0.659, 0.333, 0.969); // Purple #a855f7
          vec3 color2 = vec3(0.463, 0.145, 0.725); // Deep purple #762593
          vec3 color3 = vec3(0.925, 0.286, 0.6);   // Pink #ec4999
          vec3 color4 = vec3(0.024, 0.714, 0.831); // Cyan #06b6d4
          vec3 color5 = vec3(0.984, 0.749, 0.141); // Gold #fbbf24
          
          // Complex animated mixing
          float mixValue1 = sin(uTime * 0.25 + uv.y * 3.0) * 0.5 + 0.5;
          float mixValue2 = cos(uTime * 0.18 + uv.x * 3.0) * 0.5 + 0.5;
          float mixValue3 = sin(uTime * 0.15 + (uv.x + uv.y) * 2.0) * 0.5 + 0.5;
          
          // Layer 1: Purple to deep purple
          vec3 gradient = mix(color1, color2, mixValue1);
          
          // Layer 2: Add pink influence
          gradient = mix(gradient, color3, mixValue2 * 0.4);
          
          // Layer 3: Add cyan accents
          gradient = mix(gradient, color4, mixValue3 * 0.25);
          
          // Layer 4: Add gold highlights
          float goldInfluence = sin(uTime * 0.3 + uv.x * 4.0) * sin(uTime * 0.2 + uv.y * 4.0);
          gradient = mix(gradient, color5, goldInfluence * 0.15);
          
          // Add subtle noise for texture
          float noiseValue = noise(uv * 10.0 + uTime * 0.1) * 0.05;
          gradient += noiseValue;
          
          // Get texture
          vec4 texColor = texture2D(uTexture, uv);
          
          // Blend with reduced gradient opacity for glass effect
          gl_FragColor = vec4(gradient * 0.25 + texColor.rgb, 1.0);
        }
      `,
      transparent: true
    });
  }, [buffer.texture]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    const t = state.clock.elapsedTime;

    // Update gradient animation
    if (bgRef.current && bgRef.current.material) {
      (bgRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
    }

    // Ultra-smooth pointer tracking with premium easing
    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.06, delta);

    // Premium ripple effect with smooth scaling
    const targetScale = hovered ? 1.08 : 1;
    scaleMultiplier.current += (targetScale - scaleMultiplier.current) * 0.08;

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      const baseScale = Math.min(0.15, desired);
      ref.current.scale.setScalar(baseScale * scaleMultiplier.current);
    } else {
      const currentScale = (modeProps as { scale?: number }).scale!;
      ref.current.scale.setScalar(currentScale * scaleMultiplier.current);
    }

    // Organic rotation animation
    ref.current.rotation.z = Math.sin(t * 0.15) * 0.025 + Math.cos(t * 0.1) * 0.015;

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh ref={bgRef} scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <primitive object={gradientMaterial} attach="material" />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.25}
          thickness={thickness ?? 8}
          anisotropy={anisotropy ?? 0.4}
          chromaticAberration={chromaticAberration ?? 0.35}
          distortion={0.3}
          distortionScale={0.6}
          temporalDistortion={0.15}
          transmission={1}
          roughness={0}
          metalness={0.15}
          clearcoat={1}
          clearcoatRoughness={0}
          {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 12,
    ior: 1.2,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame((state) => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);
    const t = state.clock.elapsedTime;

    group.current.children.forEach((child, i) => {
      const baseX = (i - (items.length - 1) / 2) * spacing;
      
      // Premium floating animation with organic movement
      const floatOffset = Math.sin(t * 1.5 + i * 0.8) * 0.008 + Math.cos(t * 2 + i * 0.5) * 0.004;
      child.position.x = baseX;
      child.position.y = floatOffset;
      
      // Smooth scale animation with spring-like effect
      const targetScale = hoveredIndex === i ? 1.2 : 1;
      const currentScale = child.scale.x;
      child.scale.setScalar(currentScale + (targetScale - currentScale) * 0.12);
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }, index) => (
        <Text
          key={label}
          fontSize={fontSize}
          color={hoveredIndex === index ? "#fbbf24" : "white"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={hoveredIndex === index ? 0.004 : 0.0015}
          outlineBlur="35%"
          outlineColor={hoveredIndex === index ? "#a855f7" : "#000"}
          outlineOpacity={hoveredIndex === index ? 0.9 : 0.6}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => {
            document.body.style.cursor = 'pointer';
            setHoveredIndex(index);
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
            setHoveredIndex(null);
          }}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Premium zoom with ultra-smooth easing
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 2.2;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 2.2;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 1.6;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 1.6;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 1.6;
    
    // Enhanced parallax with organic movement
    group.current.children.forEach((child, i) => {
      const parallaxOffset = Math.sin(t * 0.25 + i * 0.7) * 0.08;
      const parallaxY = Math.cos(t * 0.15 + i * 0.5) * 0.05;
      child.position.z += parallaxOffset * 0.12;
      child.position.y += parallaxY * 0.05;
    });
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url="/assets/demo/cs1.webp" />
      <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/assets/demo/cs3.webp" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/assets/demo/cs1.webp" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
    </group>
  );
}

function Typography() {
  const textRef = useRef<THREE.Mesh>(null!);
  
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  useFrame((state) => {
    if (!textRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Premium floating with organic movement
    textRef.current.position.y = Math.sin(t * 0.4) * 0.08 + Math.cos(t * 0.6) * 0.04;
    
    // Gentle multi-axis rotation
    textRef.current.rotation.z = Math.sin(t * 0.25) * 0.015;
    textRef.current.rotation.x = Math.cos(t * 0.2) * 0.01;
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0.01}
      outlineBlur="45%"
      outlineColor="#a855f7"
      outlineOpacity={1}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      fillOpacity={1}
    >
      Premium Tools
    </Text>
  );
}
