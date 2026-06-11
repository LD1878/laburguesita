import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import {
  burgerDelMes,
  desserts,
  sides,
  signatureBurgers,
  smashBurgers,
} from "@/lib/data/menu";

export const metadata: Metadata = {
  title: "Carta — La Burguesita",
  robots: { index: false },
};

function formatPrice(price: number) {
  return `${price.toFixed(2).replace(".", ",")}€`;
}

export default function MenuPrintPage() {
  return (
    <div className="min-h-screen bg-white-pure px-8 py-12 text-black-rich print:px-0 print:py-0">
      <header className="border-b border-gray-200 pb-8 text-center">
        <h1 className="font-serif text-4xl uppercase tracking-[0.3em]">
          La Burguesita
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          La pionera de las hamburguesas gourmet en Málaga desde 2010
        </p>
        <PrintButton />
      </header>

      <MenuSection title="Burger del Mes" items={[burgerDelMes]} />
      <MenuSection title="Clásicas & Signature" items={signatureBurgers} />
      <MenuSection title="Smash Burgers" items={smashBurgers} />
      <MenuSection title="Acompañamientos" items={sides} />
      <MenuSection title="Postres" items={desserts} />

      <footer className="mt-12 border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
        <p>Calle Moreno Monroy, 5 · 951 333 374</p>
        <p className="mt-1">Paseo Cerrado de Calderón, 14 · 951 532 004</p>
        <p className="mt-4">Martes a Domingo · 13:30–16:30 / 20:00–23:30</p>
      </footer>


    </div>
  );
}

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string; price: number }[];
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl uppercase tracking-[0.2em]">{title}</h2>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-gray-100 pb-3"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
            <span className="shrink-0 font-serif">{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}