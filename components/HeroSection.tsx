"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroScene = dynamic(() => import("./3D/HeroScene"), { ssr: false });

export default function HeroSection() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById("tools");
    toolsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0518]">
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Deep Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0518]/20 to-[#0f0518] pointer-events-none" />

      {/* Grid pattern overlay (subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-glow-purple"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm text-purple-100/90 font-medium tracking-wide uppercase">
              Location entre particuliers à Nancy
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight leading-none mix-blend-overlay text-white opacity-90"
          >
            TOOL
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              RENTAL
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-purple-200/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            La solution simple pour louer des outils{" "}
            <span className="text-white font-medium">entre particuliers</span>{" "}
            sur Nancy.
            <br className="hidden md:block" /> Économisez sur vos projets ou
            rentabilisez votre matériel en toute sécurité.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTools}
              className="magnetic px-10 py-5 rounded-full bg-white text-purple-950 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Explorer la Collection
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="magnetic px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300"
            >
              Notre Vision
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer magnetic"
          onClick={scrollToTools}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-white">
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
