"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonios"
      className="relative bg-white-soft py-32 text-black-rich lg:py-40"
      aria-labelledby="testimonios-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
            Testimonios
          </p>
          <h2
            id="testimonios-heading"
            className="mt-6 font-serif text-4xl font-light tracking-wide md:text-5xl"
          >
            Lo que dicen de nosotros
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-20">
          <div className="relative mx-auto max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-2xl font-light italic leading-relaxed tracking-wide md:text-4xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <footer className="mt-10">
                  <cite className="not-italic">
                    <span className="text-sm text-gray-600">
                      {testimonials[current].author}
                    </span>
                    <span className="mx-3 text-gray-300">·</span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                      {testimonials[current].source}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-12 flex justify-center gap-2" role="tablist" aria-label="Testimonios">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonio ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-500 ${
                    i === current ? "w-12 bg-black-rich" : "w-6 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="mt-24 hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <SectionReveal key={t.id} delay={i * 0.1}>
              <blockquote className="border-t border-gray-200 pt-8">
                <p className="font-serif text-lg italic leading-relaxed text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {t.source}
                </footer>
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}