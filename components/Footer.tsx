"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useBooking } from "../context/BookingContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openBookingModal } = useBooking();

  const footerLinks = {
    services: [
      { name: "Location d'outils", href: "/#tools" },
      { name: "Catégories", href: "/#tools" },
      { name: "Tarifs", href: "/#tools" },
      { name: "Réservation", href: "/#tools" },
    ],
    company: [
      { name: "À propos", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "#" },
      { name: "Carrières", href: "#" },
    ],
    legal: [
      { name: "Mentions légales", href: "#" },
      { name: "CGV", href: "#" },
      { name: "Politique de confidentialité", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-purple-900/30 to-purple-950 border-t border-purple-500/20">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                ToolRental
              </h3>
              <p className="text-purple-200 mb-6 max-w-sm">
                Votre partenaire de confiance pour la location d'outils
                professionnels. Qualité, simplicité et économie pour tous vos
                projets.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-purple-200">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <button
                    onClick={() => openBookingModal("Contact via Footer")}
                    className="text-sm hover:text-white transition-colors"
                  >
                    Nous contacter par email
                  </button>
                </div>
                <div className="flex items-center gap-3 text-purple-200">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Nancy et agglomération (54)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-purple-300 transition-colors text-sm magnetic"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-purple-300 transition-colors text-sm magnetic"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-purple-200 hover:text-purple-300 transition-colors text-sm magnetic"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-purple-300 text-sm">
            © {currentYear} ToolRental. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 magnetic"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
