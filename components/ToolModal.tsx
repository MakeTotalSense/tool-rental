"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Shield,
  Lightbulb,
  Info,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tool } from "../data/tools";
import { useState } from "react";
import { useBooking } from "../context/BookingContext";

interface ToolModalProps {
  tool: Tool | null;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { openBookingModal } = useBooking();

  if (!tool) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tool.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + tool.images.length) % tool.images.length
    );
  };

  return (
    <AnimatePresence>
      {tool && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0f0518]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#1a0b2e] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={(e) => {
                  // Trigger mouseout to reset magnetic cursor
                  const mouseOutEvent = new MouseEvent("mouseout", {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                  });
                  e.currentTarget.dispatchEvent(mouseOutEvent);
                  onClose();
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 magnetic"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* Carousel Section */}
                <div className="relative h-64 md:h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;

                        if (swipe < -100) {
                          nextImage();
                        } else if (swipe > 100) {
                          prevImage();
                        }
                      }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, x: 50, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -50, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          src={tool.images[currentImageIndex]}
                          alt={tool.name}
                          className="w-full max-w-[300px] object-contain drop-shadow-2xl relative z-10 pointer-events-none"
                        />
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Navigation Arrows (only if > 1 image) */}
                  {tool.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all opacity-0 group-hover:opacity-100 z-20"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all opacity-0 group-hover:opacity-100 z-20"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {tool.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-white w-4"
                                : "bg-white/30 hover:bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10">
                    <span className="text-white text-sm font-semibold">
                      {tool.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-left overflow-y-auto custom-scrollbar h-full max-h-[60vh] md:max-h-[calc(90vh-2px)]">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {tool.name}
                  </h2>

                  <p className="text-purple-100/80 mb-8 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="space-y-4">
                    {tool.specifications && tool.specifications.length > 0 && (
                      <details className="group bg-purple-500/10 rounded-xl border border-purple-500/20 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                          <div className="flex items-center gap-2 text-purple-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                              <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                              Caractéristiques
                            </h3>
                          </div>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-purple-400"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 pt-0">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            {tool.specifications.map((spec, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-300 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    )}

                    {tool.usage && (
                      <details className="group bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                          <div className="flex items-center gap-2 text-pink-400">
                            <Info size={18} />
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                              Usage Recommandé
                            </h3>
                          </div>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-pink-400"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-sm text-gray-300 mt-2">
                            {tool.usage}
                          </p>
                        </div>
                      </details>
                    )}

                    {tool.usageTips && (
                      <details className="group bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                          <div className="flex items-center gap-2 text-cyan-400">
                            <Lightbulb size={18} />
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                              Nos Conseils
                            </h3>
                          </div>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-cyan-400"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 pt-0">
                          <ul className="space-y-2 mt-2">
                            {tool.usageTips.map((tip, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-300 flex items-start gap-2"
                              >
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    )}

                    {tool.safetyGuide && (
                      <details className="group bg-red-500/10 rounded-xl border border-red-500/20 overflow-hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer list-none select-none">
                          <div className="flex items-center gap-2 text-red-400">
                            <Shield size={18} />
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                              Sécurité
                            </h3>
                          </div>
                          <span className="transform group-open:rotate-180 transition-transform duration-300">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-red-400"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 pt-0">
                          <ul className="space-y-2 mt-2">
                            {tool.safetyGuide.map((guide, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-300 flex items-start gap-2"
                              >
                                <CheckCircle
                                  size={14}
                                  className="mt-0.5 text-red-400 shrink-0"
                                />
                                {guide}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {tool.pricePerDay}€{" "}
                      <span className="text-sm font-normal text-purple-300">
                        / jour
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openBookingModal(`Réservation : ${tool.name}`)
                      }
                      className="magnetic px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                    >
                      Réserver maintenant
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
