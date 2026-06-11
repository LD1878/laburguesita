"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { locations } from "@/lib/data/locations";

export function Locations() {
  return (
    <section
      id="locales"
      className="relative bg-black-rich py-32 lg:py-40"
      aria-labelledby="locales-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
            Nuestros Locales
          </p>
          <h2
            id="locales-heading"
            className="mt-6 font-serif text-4xl font-light tracking-wide text-white-pure md:text-5xl lg:text-6xl"
          >
            Dos casas, una pasión
          </h2>
        </SectionReveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {locations.map((location, i) => (
            <SectionReveal key={location.id} delay={i * 0.1}>
              <article className="group border border-gray-900 bg-black-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`Local ${location.name}`}
                    fill
                    className="bw-image object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-serif text-2xl tracking-wide text-white-pure lg:text-3xl">
                    {location.name}
                  </h3>
                  <div className="mt-6 space-y-4 text-sm text-gray-500">
                    <p className="flex items-start gap-3">
                      <MapPin size={16} strokeWidth={1} className="mt-0.5 shrink-0 text-gray-600" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={16} strokeWidth={1} className="shrink-0 text-gray-600" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-white-soft"
                      >
                        {location.phone}
                      </a>
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-600">
                      {location.hours}
                    </p>
                  </div>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex border border-gray-800 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-all duration-500 hover:border-white-pure hover:text-white-pure"
                  >
                    Cómo llegar
                  </a>
                  <div className="relative mt-8 aspect-[16/7] overflow-hidden border border-gray-900">
                    <iframe
                      src={location.embedUrl}
                      title={`Mapa ${location.name}`}
                      className="absolute inset-0 h-full w-full grayscale opacity-80"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}