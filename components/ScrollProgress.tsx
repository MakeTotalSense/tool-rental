"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const circumference = 2 * Math.PI * 20; // radius = 20
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-40 hidden md:block"
    >
      <div className="relative w-14 h-14">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="20"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r="20"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">
            {Math.round(scrollProgress)}%
          </span>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-50"
          style={{
            background: `conic-gradient(from 0deg, #a855f7 ${scrollProgress}%, transparent ${scrollProgress}%)`,
          }}
        />
      </div>
    </motion.div>
  );
}
