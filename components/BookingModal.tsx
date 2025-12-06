"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Mail } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import { fr } from "date-fns/locale";
import "react-day-picker/dist/style.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultSubject,
}: BookingModalProps) {
  const [range, setRange] = useState<DateRange | undefined>();

  // Helper to format date for email (DD/MM/YYYY)
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR");
  };

  // Helper to reconstruct email safely to avoid bot harvesting
  const getEmail = () => {
    const user = "maxence1212";
    const domain = "hotmail.fr";
    return `${user}@${domain}`;
  };

  const handleSendEmail = () => {
    if (!range?.from || !range?.to) return;

    const email = getEmail();
    const subject = encodeURIComponent(defaultSubject);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite effectuer une réservation pour : ${defaultSubject}.\n\nDates souhaitées :\nDu : ${formatDate(
        range.from
      )}\nAu : ${formatDate(
        range.to
      )}\n\nMerci de me confirmer la disponibilité.\n\nCordialement.`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const isFormValid = range?.from && range?.to;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0f0518]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-[#1a0b2e] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors z-20"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6 w-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    Planifier votre location
                  </h2>
                  <p className="text-purple-200/60 text-sm">
                    Sélectionnez vos dates
                  </p>
                </div>
              </div>

              {/* DayPicker Calendar */}
              <div className="bg-white/5 p-4 rounded-3xl border border-white/10 mb-6 w-full flex justify-center shadow-inner">
                <DayPicker
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  locale={fr}
                  numberOfMonths={1}
                  disabled={{ before: new Date() }} // Disable past dates
                  showOutsideDays
                />
              </div>

              <div className="space-y-4 w-full">
                <div className="flex justify-between text-sm text-purple-200 border-t border-white/10 pt-4 mb-4">
                  <div>
                    <span className="block text-purple-200/50 text-xs mb-1">
                      Du
                    </span>
                    <span className="font-semibold text-white">
                      {range?.from ? formatDate(range.from) : "-"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-purple-200/50 text-xs mb-1">
                      Au
                    </span>
                    <span className="font-semibold text-white">
                      {range?.to ? formatDate(range.to) : "-"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleSendEmail}
                  disabled={!isFormValid}
                  className={`w-full group relative flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isFormValid
                      ? "bg-white text-purple-950 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02]"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <span>Envoyer la demande</span>
                  <Mail
                    size={20}
                    className={`transition-transform duration-300 ${
                      isFormValid ? "group-hover:translate-x-1" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
