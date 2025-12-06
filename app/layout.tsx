import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MagneticCursor from "../components/MagneticCursor";
import ScrollProgress from "../components/ScrollProgress";
import { BookingProvider } from "../context/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Location Outil Nancy - ToolRental | Outils Professionnels au Meilleur Prix",
  description:
    "Besoin d'outils à Nancy ? Louez perceuses, scies, ponceuses et plus encore chez ToolRental. Matériel professionnel pour particuliers et pros à Nancy et alentours. Réservez maintenant !",
  keywords: [
    "location outil nancy",
    "louer outils nancy",
    "bricolage nancy",
    "location matériel nancy",
    "perceuse nancy",
    "ponceuse nancy",
    "outillage professionnel lorraine",
  ],
  authors: [{ name: "Maxence" }],
  creator: "Maxence",
  publisher: "ToolRental Nancy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tool-rental-nancy.fr",
    title: "Location Outil Nancy - ToolRental | Outils Pro & Service Local",
    description:
      "Louez vos outils de bricolage à Nancy. Simple, rapide et économique. Large gamme d'outils professionnels disponibles immédiatement.",
    siteName: "ToolRental Nancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Outil Nancy - ToolRental",
    description:
      "Le spécialiste de la location d'outils à Nancy. Équipez-vous comme un pro à petit prix.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ cursor: "none" }}
      >
        <BookingProvider>
          <MagneticCursor />
          <Navbar />
          <ScrollProgress />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
