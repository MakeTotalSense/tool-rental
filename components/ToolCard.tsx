"use client";

import React, { useState, useRef, useEffect } from "react";

interface ToolCardProps {
  id: number;
  imageSrc: string;
  title: string;
  price: string | number;
}

const ToolCard: React.FC<ToolCardProps> = ({ imageSrc, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Premium 3D tilt effect following mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative w-64 h-80 rounded-3xl overflow-visible cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) translateY(-12px) scale(1.03)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Premium outer glow */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-500 -z-10"
        style={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(168, 85, 247, 0.5), 0 35px 60px -15px rgba(236, 72, 153, 0.4), 0 45px 70px -20px rgba(6, 182, 212, 0.3)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          filter: isHovered ? "blur(0px)" : "blur(0px)",
        }}
      />

      {/* Main card container with glassmorphism */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {/* Premium multi-layer gradient background */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(168, 85, 247, 0.95) 0%, rgba(139, 92, 246, 0.9) 25%, rgba(236, 72, 153, 0.92) 50%, rgba(219, 39, 119, 0.88) 75%, rgba(168, 85, 247, 0.9) 100%)"
              : "linear-gradient(135deg, rgba(168, 85, 247, 0.85) 0%, rgba(139, 92, 246, 0.8) 33%, rgba(236, 72, 153, 0.82) 66%, rgba(168, 85, 247, 0.8) 100%)",
          }}
        ></div>

        {/* Glassmorphism layer */}
        <div
          className="absolute inset-0 backdrop-blur-md transition-all duration-500"
          style={{
            backgroundColor: isHovered
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(255, 255, 255, 0.08)",
          }}
        />

        {/* Premium shimmer effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: isHovered ? "shimmer 2.5s infinite" : "none",
          }}
        />

        {/* Gradient border effect */}
        <div
          className="absolute inset-0 rounded-3xl transition-all duration-500"
          style={{
            padding: "2px",
            background: isHovered
              ? "linear-gradient(135deg, rgba(251, 191, 36, 0.6), rgba(236, 72, 153, 0.6), rgba(168, 85, 247, 0.6), rgba(6, 182, 212, 0.6))"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Content container */}
        <div className="relative w-full h-full p-6 flex flex-col justify-between rounded-3xl">
          {/* Top section - Title and Price */}
          <div className="space-y-3">
            {/* Title with premium glow */}
            <h2
              className="font-bold text-2xl leading-tight text-white transition-all duration-300 group-hover:scale-105"
              style={{
                textShadow: isHovered
                  ? "0 0 30px rgba(251, 191, 36, 0.8), 0 0 15px rgba(255, 255, 255, 0.6), 0 4px 8px rgba(0, 0, 0, 0.5)"
                  : "0 2px 8px rgba(0, 0, 0, 0.4)",
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              {title}
            </h2>

            {/* Premium price badge */}
            <div className="inline-flex items-center">
              <div
                className="px-4 py-2 rounded-full transition-all duration-300"
                style={{
                  background: isHovered
                    ? "linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(6, 182, 212, 0.3))"
                    : "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: isHovered
                    ? "2px solid rgba(251, 191, 36, 0.5)"
                    : "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: isHovered
                    ? "0 8px 20px rgba(251, 191, 36, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
                    : "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <p
                  className="text-base font-bold text-white"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {typeof price === "number" ? `$${price}/day` : price}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section - Image with premium effects */}
          <div className="relative w-full h-48 transition-all duration-500 group-hover:scale-105">
            {/* Image glow effect */}
            <div
              className="absolute inset-0 rounded-2xl transition-all duration-500"
              style={{
                background: isHovered
                  ? "radial-gradient(circle at center, rgba(251, 191, 36, 0.6), rgba(168, 85, 247, 0.4), transparent 70%)"
                  : "radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent 60%)",
                filter: "blur(20px)",
                opacity: isHovered ? 1 : 0.5,
              }}
            />

            {/* Image container */}
            <div className="relative w-full h-full">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-contain rounded-2xl transition-all duration-500"
                style={{
                  filter: isHovered
                    ? "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5)) brightness(1.15) saturate(1.2)"
                    : "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) brightness(1) saturate(0.9)",
                  transform: isHovered
                    ? "translateY(-8px) scale(1.05)"
                    : "translateY(0) scale(1)",
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <>
            <div
              className="absolute w-2 h-2 rounded-full animate-float-1"
              style={{
                top: "15%",
                left: "10%",
                background:
                  "radial-gradient(circle, rgba(251, 191, 36, 0.8), transparent)",
                boxShadow: "0 0 10px rgba(251, 191, 36, 0.6)",
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 rounded-full animate-float-2"
              style={{
                top: "25%",
                right: "15%",
                background:
                  "radial-gradient(circle, rgba(6, 182, 212, 0.8), transparent)",
                boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
              }}
            />
            <div
              className="absolute w-2 h-2 rounded-full animate-float-3"
              style={{
                top: "45%",
                left: "20%",
                background:
                  "radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",
                boxShadow: "0 0 10px rgba(236, 72, 153, 0.6)",
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 rounded-full animate-float-1"
              style={{
                top: "60%",
                right: "25%",
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.8), transparent)",
                boxShadow: "0 0 8px rgba(168, 85, 247, 0.6)",
                animationDelay: "0.5s",
              }}
            />
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px) translateX(15px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-25px) translateX(-12px) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-35px) translateX(8px) scale(1.1);
            opacity: 1;
          }
        }

        .animate-float-1 {
          animation: float-1 3.5s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite 0.7s;
        }

        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite 1.2s;
        }
      `}</style>
    </div>
  );
};

export default ToolCard;
