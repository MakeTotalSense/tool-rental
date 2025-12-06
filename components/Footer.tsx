"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openBookingModal } = useBooking();

  return (
    <footer className="relative bg-[#0f0518] border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-black tracking-tight text-white mb-4">
              TOOL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                RENTAL
              </span>
            </h3>
            <p className="text-purple-200/60 leading-relaxed text-lg">
              Simplifiez vos travaux avec notre service de location entre
              particuliers sur Nancy.
              <br />
              Qualité, proximité et sécurité.
            </p>
          </motion.div>

          {/* Contact Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <button
              onClick={() => openBookingModal("Contact via Footer")}
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-purple-100 font-medium group-hover:text-white">
                Nous contacter
              </span>
            </button>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-purple-200/40 text-sm mb-12 py-2 px-4 rounded-full bg-white/[0.02]"
          >
            <MapPin className="w-3 h-3" />
            <span>Nancy et agglomération (54)</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-purple-200/20 text-xs font-mono"
          >
            © {currentYear} ToolRental. Tous droits réservés.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
