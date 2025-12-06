"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Outils", href: "/#tools" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 px-4`}
      >
        <div
          className={`
                relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
                ${
                  isScrolled
                    ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-purple-500/10 w-full max-w-5xl"
                    : "bg-transparent w-full max-w-7xl border border-transparent"
                }
            `}
        >
          {/* Logo */}
          <Link href="/" className="magnetic group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:text-white transition-colors"
            >
              TR.
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="magnetic"
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    // Check if we are on the home page (allowing for base path)
                    const path = window.location.pathname;
                    // If we are on the home page (root or base path)
                    if (
                      path === "/" ||
                      path === "/tool-rental/" ||
                      path.endsWith("/tool-rental")
                    ) {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.href.substring(2)
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                <motion.div
                  className="px-5 py-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            {/* CTA Button */}
            <motion.button
              onClick={() => openBookingModal("Demande de réservation")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="magnetic px-6 py-2.5 rounded-full bg-white text-purple-900 font-bold text-sm shadow-lg transition-all"
            >
              Réserver
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 magnetic hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0f0518]/95 backdrop-blur-xl flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 p-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-8 py-4 rounded-full bg-white text-purple-900 font-bold text-lg"
              >
                Réserver un outil
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-white/50 hover:text-white"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
