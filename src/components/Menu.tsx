"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { BurgerBuilder } from "@/components/BurgerBuilder";
import { MenuCard } from "@/components/MenuCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  burgerDelMes,
  desserts,
  menuCategories,
  sides,
  signatureBurgers,
  smashBurgers,
  type MenuCategory,
} from "@/lib/data/menu";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("clasicas");

  return (
    <section
      id="menu"
      className="relative bg-black-rich py-32 lg:py-40"
      aria-labelledby="menu-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
                El Menú
              </p>
              <h2
                id="menu-heading"
                className="mt-6 font-serif text-4xl font-light tracking-wide text-white-pure md:text-5xl lg:text-6xl"
              >
                Una carta con alma
              </h2>
            </div>
            <a
              href="/menu-print"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-800 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-all duration-500 hover:border-white-pure hover:text-white-pure"
            >
              <Download size={14} strokeWidth={1} />
              Descargar Menú
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-16 border border-gray-900 bg-black-soft p-8 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  {burgerDelMes.badge}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-white-pure lg:text-3xl">
                  {burgerDelMes.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
                  {burgerDelMes.description}
                </p>
              </div>
              <p className="font-serif text-3xl text-gray-400">
                {burgerDelMes.price.toFixed(2).replace(".", ",")}€
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <nav
            className="mt-16 flex gap-1 overflow-x-auto border-b border-gray-900 hide-scrollbar"
            aria-label="Categorías del menú"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative shrink-0 px-5 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                  activeCategory === cat.id
                    ? "text-white-pure"
                    : "text-gray-500 hover:text-gray-400"
                }`}
                aria-current={activeCategory === cat.id ? "true" : undefined}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="menu-tab"
                    className="absolute inset-x-0 bottom-0 h-px bg-white-pure"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </nav>
        </SectionReveal>

        <div className="mt-12">
          {activeCategory === "clasicas" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {signatureBurgers.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <MenuCard item={item} />
                </SectionReveal>
              ))}
            </div>
          )}

          {activeCategory === "smash" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {smashBurgers.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <MenuCard item={item} />
                </SectionReveal>
              ))}
            </div>
          )}

          {activeCategory === "fabrica" && <BurgerBuilder />}

          {activeCategory === "acompanamientos" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sides.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <MenuCard item={item} />
                </SectionReveal>
              ))}
            </div>
          )}

          {activeCategory === "postres" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {desserts.map((item, i) => (
                <SectionReveal key={item.id} delay={i * 0.05}>
                  <MenuCard item={item} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}