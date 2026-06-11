"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Historia() {
  return (
    <section
      id="historia"
      className="relative bg-white-soft py-32 text-black-rich lg:py-40"
      aria-labelledby="historia-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
            Nuestra Historia
          </p>
          <h2
            id="historia-heading"
            className="mt-6 max-w-3xl font-serif text-4xl font-light leading-tight tracking-wide md:text-5xl lg:text-6xl"
          >
            La que cambió el mapa gastronómico de Málaga
          </h2>
        </SectionReveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-8 text-base leading-[1.9] text-gray-600 md:text-lg">
              <p>
                En 2010, cuando nadie en Málaga hablaba aún de hamburguesas
                gourmet, abrimos las puertas de La Burguesita con una convicción
                simple y radical: la hamburguesa podía ser tan refinada, honesta
                y memorable como cualquier gran plato de alta cocina.
              </p>
              <p>
                Fuimos la primera. La pionera. Y desde entonces, nuestra obsesión
                no ha cambiado: carne de vaca nacional de la más alta calidad,
                seleccionada con el mismo rigor que exigiríamos para nuestra propia
                mesa. Sin atajos. Sin concesiones.
              </p>
              <p>
                Con los años, hemos evolucionado sin perder nuestra esencia. Las
                smash burgers — con su crujiente perfección y su alma americana
                reinterpretada — conviven con nuestras signature de siempre: La
                Favorita, The Original, Deluxe. Cada una cuenta una historia. Cada
                una lleva quince años de pasión detrás.
              </p>
              <p>
                Hoy, desde nuestros dos locales — el íntimo Centro en Calle
                Moreno Monroy y el elegante Cerrado de Calderón — seguimos
                escribiendo el mismo capítulo: calidad atemporal, creatividad sin
                artificios, y el calor de una cocina que ama lo que hace.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-5" delay={0.2}>
            <div className="space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                  alt="Interior refinado del restaurante"
                  fill
                  className="bw-image object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80"
                  alt="Detalle artístico de hamburguesa gourmet"
                  fill
                  className="bw-image object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Fotografía artística · Sustituir por imágenes profesionales del local
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}