"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import BookingModal from "../components/BookingModal";

interface BookingContextType {
  openBookingModal: (subject?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSubject, setDefaultSubject] = useState("");

  const openBookingModal = (subject: string = "Demande de location") => {
    setDefaultSubject(subject);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBookingModal}
        defaultSubject={defaultSubject}
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
