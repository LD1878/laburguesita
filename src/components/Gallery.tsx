"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { galleryImages } from "@/lib/data/gallery";

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-white-soft py-32 text-black-rich lg:py-40"
      aria-labelledby="galeria-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative">
        <SectionReveal className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
            Galería
          </p>
          <h2
            id="galeria-heading"
            className="mt-6 font-serif text-4xl font-light tracking-wide md:text-5xl"
          >
            Momentos atemporales
          </h2>
        </SectionReveal>

        <div
          ref={scrollRef}
          className="mt-16 flex gap-4 overflow-x-auto px-6 pb-4 hide-scrollbar lg:gap-6 lg:px-10"
          role="list"
          aria-label="Galería de imágenes"
        >
          {galleryImages.map((image, i) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightboxIndex(i)}
              className="group relative shrink-0 overflow-hidden"
              style={{ width: "min(75vw, 420px)" }}
              role="listitem"
              aria-label={`Ver ${image.caption}`}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="bw-image object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-black-rich/0 transition-colors duration-500 group-hover:bg-black-rich/20" />
              </div>
              <p className="mt-4 text-left text-[10px] uppercase tracking-[0.3em] text-gray-500">
                {image.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          src={galleryImages[lightboxIndex].src}
          alt={galleryImages[lightboxIndex].alt}
          caption={galleryImages[lightboxIndex].caption}
        />
      )}
    </section>
  );
}