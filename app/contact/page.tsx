"use client";

import { motion } from "motion/react";
import {
  Mail,
  ShieldCheck,
  CreditCard,
  UserCheck,
  Sparkles,
} from "lucide-react";
import Footer from "../../components/Footer";
import { useBooking } from "../../context/BookingContext";

export default function ContactPage() {
  const { openBookingModal } = useBooking();
  return (
    <div className="min-h-screen bg-[#0f0518] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm text-purple-100/90 font-medium tracking-wide uppercase">
              Location simple & sécurisée
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
          >
            Conditions de location
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-purple-200/80 mb-12 max-w-2xl mx-auto"
          >
            Pour louer un outil, rien de plus simple. Voici les documents
            nécessaires pour valider votre réservation.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <CreditCard size={120} className="text-purple-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Chèque de Caution
                </h3>
                <p className="text-purple-200/80 leading-relaxed">
                  Un chèque de caution est demandé pour toute location. Ce
                  chèque n'est pas encaissé et vous sera restitué au retour de
                  l'outil, après vérification de son bon état de fonctionnement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <UserCheck size={120} className="text-cyan-400" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-300">
                  <UserCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pièce d'Identité
                </h3>
                <p className="text-purple-200/80 leading-relaxed">
                  Une pièce d'identité en cours de validité (Carte Nationale
                  d'Identité ou Passeport) vous sera demandée lors du retrait du
                  matériel. Une copie sera conservée durant la durée de la
                  location.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              <button
                onClick={() => openBookingModal("Demande via page Contact")}
                className="block px-10 py-5 rounded-full bg-[#1a0b2e] hover:bg-[#230f3d] transition-colors text-white font-bold text-lg flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email pour réserver
              </button>
            </div>
            <p className="mt-4 text-purple-300/60 text-sm">
              Réponse rapide sous 24h garantie
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
