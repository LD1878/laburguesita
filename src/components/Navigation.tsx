"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { deliveryLinks } from "@/lib/data/locations";

const navLinks = [
  { href: "#historia", label: "Historia" },
  { href: "#menu", label: "El Menú" },
  { href: "#locales", label: "Locales" },
  { href: "#reserva", label: "Reserva" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-gray-900/80 bg-black-rich/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
          aria-label="Navegación principal"
        >
          <a
            href="#"
            className="font-serif text-sm font-medium uppercase tracking-[0.35em] text-white-pure transition-opacity hover:opacity-70 lg:text-base"
          >
            LA BURGUESITA
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400 transition-colors duration-500 hover:text-white-pure"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={deliveryLinks.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 bg-gray-900 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white-soft transition-all duration-500 hover:border-white-pure hover:bg-white-pure hover:text-black-rich"
            >
              Glovo
            </a>
            <a
              href={deliveryLinks.uberEatsCentro}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white-pure bg-white-pure px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-black-rich transition-all duration-500 hover:bg-transparent hover:text-white-pure"
            >
              Uber Eats
            </a>
          </div>

          <button
            className="text-white-soft lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={22} strokeWidth={1} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black-rich lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-sm uppercase tracking-[0.35em]">
                LA BURGUESITA
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={22} strokeWidth={1} />
              </button>
            </div>
            <nav className="flex flex-col gap-8 px-6 pt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-3xl tracking-wide text-white-soft"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={deliveryLinks.glovo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 py-4 text-center text-xs uppercase tracking-[0.2em]"
                >
                  Pedir en Glovo
                </a>
                <a
                  href={deliveryLinks.uberEatsCentro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white-pure bg-white-pure py-4 text-center text-xs uppercase tracking-[0.2em] text-black-rich"
                >
                  Pedir en Uber Eats
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}