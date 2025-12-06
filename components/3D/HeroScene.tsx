"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Stars,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Hammer({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      groupRef.current.rotation.y += 0.005;
    }
  });

  const materialProps = {
    backside: true,
    backsideThickness: 0.5,
    thickness: 0.2,
    chromaticAberration: 0.5,
    anisotropy: 0.5,
    distortion: 0.2,
    temporalDistortion: 0.1,
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group
        ref={groupRef}
        position={new THREE.Vector3(...position)}
        scale={scale}
        rotation={new THREE.Euler(...rotation)}
      >
        {/* Handle */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.2, 0.25, 3, 16]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#fbbf24")}
          />{" "}
          {/* Wood/Goldish */}
        </mesh>

        {/* Head Center */}
        <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1.2, 16]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#a855f7")}
          />{" "}
          {/* Primary Purple */}
        </mesh>

        {/* Hammer Face (Flat) */}
        <mesh position={[0, 0.2, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.3, 0.2, 16]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#d8b4fe")}
          />
        </mesh>

        {/* Hammer Claw (Curved/Tapered) - represented by a box for simplicity in primitive composition */}
        <mesh position={[0, 0.4, -0.6]} rotation={[-0.2, 0, 0]}>
          <boxGeometry args={[0.4, 0.2, 1]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#d8b4fe")}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Screwdriver({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.cos(state.clock.getElapsedTime() * 0.3) * 0.1;
      groupRef.current.rotation.y -= 0.005;
    }
  });

  const materialProps = {
    backside: true,
    backsideThickness: 0.5,
    thickness: 0.2,
    chromaticAberration: 0.4,
    anisotropy: 0.5,
    distortion: 0.1,
    temporalDistortion: 0.1,
  };

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <group
        ref={groupRef}
        position={new THREE.Vector3(...position)}
        scale={scale}
        rotation={new THREE.Euler(...rotation)}
      >
        {/* Handle */}
        <mesh position={[0, -1, 0]}>
          <capsuleGeometry args={[0.3, 1.5, 4, 16]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#ec4899")}
          />{" "}
          {/* Pink handle */}
        </mesh>

        {/* Shaft */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 2, 12]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#22d3ee")}
          />{" "}
          {/* Cyan Steel */}
        </mesh>

        {/* Tip */}
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.08, 0.2, 4]} />
          <MeshTransmissionMaterial
            {...materialProps}
            color={new THREE.Color("#22d3ee")}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />

      <Environment preset="city" />

      <group position={[0, 0, 0]}>
        <Hammer position={[2.5, 0, 0]} scale={0.8} rotation={[0, 0, -0.5]} />
        <Screwdriver
          position={[-2.5, 0.5, -1]}
          scale={0.8}
          rotation={[0, 0, 0.5]}
        />
      </group>

      <Particles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
