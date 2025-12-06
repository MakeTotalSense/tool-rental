"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Hammer, Heart, Share2, Sparkles, User } from "lucide-react";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const stats = [
    {
      icon: User,
      label: "Chantiers réalisés",
      value: "10+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Hammer,
      label: "Outils accumulés",
      value: "15+",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Share2,
      label: "Économie locale",
      value: "Local",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0518] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="relative container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm text-purple-100/90 font-medium tracking-wide uppercase">
              Une histoire de passion
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
          >
            Du chantier personnel
            <br />
            au partage d'outils
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-purple-900/20"
          >
            {/* Decorative Quote */}
            <div className="absolute -top-6 -left-6 text-8xl text-purple-500/20 font-serif leading-none">
              "
            </div>

            <div className="space-y-6 text-lg md:text-xl text-purple-100/90 font-light leading-relaxed">
              <p>
                Tout a commencé en 2024, lorsque j'ai acheté ma première maison.
                Une bâtisse qui avait besoin de beaucoup d'amour... et de
                travaux.
              </p>
              <p>
                Comme beaucoup, je me suis lancé corps et âme dans la
                rénovation. Pour faire du bon travail, j'ai investi dans des
                outils de qualité professionnelle : une scie circulaire précise,
                une perceuse robuste, un perforateur puissant.
              </p>
              <p>
                Une fois le gros œuvre terminé, je me suis retrouvé avec un
                garage (et une cave) rempli d'équipements qui prenaient la
                poussière.
                <span className="text-white font-medium">
                  {" "}
                  C'est là que j'ai eu le déclic.
                </span>
              </p>
              <p>
                Pourquoi laisser ces outils dormir alors que mes voisins en ont
                peut-être besoin pour leurs propres projets ? Plutôt que de les
                vendre, j'ai décidé de les proposer à la location.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[200px]"
              >
                <div className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.07]  transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-4 shadow-lg shadow-purple-900/50`}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-purple-300/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 pt-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-purple-200 mb-8">
            Je serais ravi de vous conseiller sur l'outil le plus adapté à vos
            besoins.
          </p>
          <Link
            href="/contact"
            className="inline-block magnetic px-8 py-4 rounded-full bg-white text-purple-950 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Me contacter
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
