"use client";

import { motion } from "motion/react";
import ToolCard from "./ToolCard";
import { tools, Tool } from "../data/tools";
import { useState } from "react";
import { categories } from "../data/categories";
import ToolModal from "./ToolModal";

export default function ToolsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filteredTools =
    selectedCategory === "all"
      ? tools
      : tools.filter((tool) =>
          tool.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .includes(selectedCategory)
        );

  return (
    <section id="tools" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Nos outils disponibles
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Découvrez notre sélection d'outils professionnels disponibles à la
            location
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 magnetic ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
            }`}
          >
            Tous
          </button>
          {categories
            .filter((category) =>
              tools.some((tool) =>
                tool.category
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-")
                  .includes(category.id)
              )
            )
            .map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 magnetic ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
        >
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedTool(tool)}
              className="cursor-pointer"
            >
              <ToolCard
                id={tool.id}
                imageSrc={tool.image}
                title={tool.name}
                price={tool.pricePerDay}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-purple-200">
              Aucun outil trouvé dans cette catégorie
            </p>
          </motion.div>
        )}
      </div>

      <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </section>
  );
}
