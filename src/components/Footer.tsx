import { Instagram } from "lucide-react";
import { deliveryLinks, socialLinks } from "@/lib/data/locations";

export function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black-rich py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-serif text-lg uppercase tracking-[0.35em] text-white-pure">
              LA BURGUESITA
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              La pionera de las hamburguesas gourmet en Málaga desde 2010
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                Pedir Online
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={deliveryLinks.glovo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white-soft"
                  >
                    Glovo
                  </a>
                </li>
                <li>
                  <a
                    href={deliveryLinks.uberEatsCentro}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white-soft"
                  >
                    Uber Eats — Centro
                  </a>
                </li>
                <li>
                  <a
                    href={deliveryLinks.uberEatsCalderon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white-soft"
                  >
                    Uber Eats — Calderón
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                Síguenos
              </p>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white-soft"
                aria-label="Instagram @laburguesitamalaga"
              >
                <Instagram size={16} strokeWidth={1} />
                @laburguesitamalaga
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-900 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
            © {new Date().getFullYear()} La Burguesita. Todos los derechos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
            Hecho con pasión en Málaga desde 2010
          </p>
        </div>
      </div>
    </footer>
  );
}