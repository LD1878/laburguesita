"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { deliveryLinks } from "@/lib/data/locations";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden"
      aria-label="Portada"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=85"
          alt="Hamburguesa gourmet artística en blanco y negro"
          fill
          priority
          className="bw-image object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/60 to-black-rich/30" />
        <div className="grain-overlay-light" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gray-400">
            Málaga · Desde 2010
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-wide text-white-pure md:text-7xl lg:text-8xl">
            LA BURGUESITA
          </h1>
          <p className="mt-8 max-w-xl font-serif text-xl font-light italic leading-relaxed text-gray-400 md:text-2xl">
            La pionera de las hamburguesas gourmet en Málaga desde 2010
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#menu" variant="primary">
            Descubrir el Menú
          </Button>
          <Button href="#reserva" variant="outline">
            Reservar Mesa
          </Button>
          <Button href={deliveryLinks.glovo} variant="ghost" external>
            Pedir a Domicilio
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#historia"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-white-soft"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={24} strokeWidth={1} className="animate-pulse" />
      </motion.a>
    </section>
  );
}