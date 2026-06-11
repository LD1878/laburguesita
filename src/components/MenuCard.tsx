"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/lib/data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="group relative flex flex-col overflow-hidden border border-gray-900 bg-black-soft"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="bw-image object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.badge && (
          <span className="absolute left-4 top-4 border border-white-pure/30 bg-black-rich/70 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-white-soft backdrop-blur-sm">
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl tracking-wide text-white-pure lg:text-2xl">
            {item.name}
          </h3>
          <span className="shrink-0 font-serif text-lg text-gray-400">
            {item.price.toFixed(2).replace(".", ",")}€
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          {item.description}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-gray-900 pt-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  Ingredientes
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="border border-gray-800 px-3 py-1 text-[11px] text-gray-400"
                    >
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}