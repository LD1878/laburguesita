"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  basePrice,
  breadOptions,
  cheeseOptions,
  pattyOptions,
  proteinOptions,
  sauceOptions,
  toppingOptions,
  type BuilderOption,
} from "@/lib/data/burger-builder";
import { SectionReveal } from "@/components/ui/SectionReveal";

type Step = 1 | 2 | 3 | 4 | 5;

const steps: { num: Step; label: string }[] = [
  { num: 1, label: "Carne" },
  { num: 2, label: "Queso & Proteína" },
  { num: 3, label: "Salsas" },
  { num: 4, label: "Extras" },
  { num: 5, label: "Pan" },
];

function OptionButton({
  option,
  selected,
  onSelect,
  multi = false,
}: {
  option: BuilderOption;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full border px-5 py-4 text-left transition-all duration-500 ${
        selected
          ? "border-white-pure bg-gray-900 text-white-pure"
          : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white-soft"
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm">{option.name}</span>
        <span className="text-xs text-gray-500">
          {option.price > 0 ? `+${option.price.toFixed(2).replace(".", ",")}€` : "Incl."}
        </span>
      </div>
      {option.description && (
        <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
          {option.description}
        </span>
      )}
      {multi && (
        <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-gray-600">
          Selección múltiple
        </span>
      )}
    </button>
  );
}

export function BurgerBuilder() {
  const [step, setStep] = useState<Step>(1);
  const [patty, setPatty] = useState("single");
  const [cheese, setCheese] = useState("cheddar");
  const [proteins, setProteins] = useState<string[]>([]);
  const [sauce, setSauce] = useState("burguesita");
  const [toppings, setToppings] = useState<string[]>([]);
  const [bread, setBread] = useState("brioche");

  const total = useMemo(() => {
    const allOptions = [
      ...pattyOptions,
      ...cheeseOptions,
      ...proteinOptions,
      ...sauceOptions,
      ...toppingOptions,
      ...breadOptions,
    ];

    const getPrice = (id: string) =>
      allOptions.find((o) => o.id === id)?.price ?? 0;

    const proteinTotal = proteins.reduce((sum, id) => sum + getPrice(id), 0);
    const toppingTotal = toppings.reduce((sum, id) => sum + getPrice(id), 0);

    return (
      basePrice +
      getPrice(patty) +
      getPrice(cheese) +
      getPrice(sauce) +
      getPrice(bread) +
      proteinTotal +
      toppingTotal
    );
  }, [patty, cheese, proteins, sauce, toppings, bread]);

  const toggleMulti = (id: string, current: string[], setter: (v: string[]) => void) => {
    setter(current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  };

  return (
    <SectionReveal>
      <div className="border border-gray-900 bg-black-soft">
        <div className="border-b border-gray-900 px-6 py-8 lg:px-10">
          <h3 className="font-serif text-2xl tracking-wide text-white-pure lg:text-3xl">
            Fábrica tu Burger
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            Construye tu hamburguesa perfecta. Carne 100% vaca nacional, ingredientes
            premium y cálculo en tiempo real.
          </p>
        </div>

        <div className="flex overflow-x-auto border-b border-gray-900 hide-scrollbar">
          {steps.map((s) => (
            <button
              key={s.num}
              type="button"
              onClick={() => setStep(s.num)}
              className={`shrink-0 px-6 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 lg:px-8 ${
                step === s.num
                  ? "bg-gray-900 text-white-pure"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              <span className="mr-2 text-gray-600">0{s.num}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-3 lg:p-10">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {pattyOptions.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    option={opt}
                    selected={patty === opt.id}
                    onSelect={() => setPatty(opt.id)}
                  />
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    Queso
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {cheeseOptions.map((opt) => (
                      <OptionButton
                        key={opt.id}
                        option={opt}
                        selected={cheese === opt.id}
                        onSelect={() => setCheese(opt.id)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    Proteínas premium
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {proteinOptions.map((opt) => (
                      <OptionButton
                        key={opt.id}
                        option={opt}
                        selected={proteins.includes(opt.id)}
                        onSelect={() => toggleMulti(opt.id, proteins, setProteins)}
                        multi
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {sauceOptions.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    option={opt}
                    selected={sauce === opt.id}
                    onSelect={() => setSauce(opt.id)}
                  />
                ))}
              </div>
            )}
            {step === 4 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {toppingOptions.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    option={opt}
                    selected={toppings.includes(opt.id)}
                    onSelect={() => toggleMulti(opt.id, toppings, setToppings)}
                    multi
                  />
                ))}
              </div>
            )}
            {step === 5 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {breadOptions.map((opt) => (
                  <OptionButton
                    key={opt.id}
                    option={opt}
                    selected={bread === opt.id}
                    onSelect={() => setBread(opt.id)}
                  />
                ))}
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="border border-gray-800 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors hover:border-gray-600 hover:text-white-soft"
                >
                  Anterior
                </button>
              )}
              {step < 5 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  className="border border-white-pure bg-white-pure px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-black-rich transition-colors hover:bg-transparent hover:text-white-pure"
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>

          <div className="border border-gray-900 bg-black-rich p-6 lg:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Tu creación
            </p>
            <motion.p
              key={total}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-serif text-4xl text-white-pure"
            >
              {total.toFixed(2).replace(".", ",")}€
            </motion.p>
            <ul className="mt-6 space-y-2 text-sm text-gray-500">
              <li>Base vaca nacional</li>
              <li>{pattyOptions.find((o) => o.id === patty)?.name}</li>
              <li>{cheeseOptions.find((o) => o.id === cheese)?.name}</li>
              <li>{sauceOptions.find((o) => o.id === sauce)?.name}</li>
              <li>{breadOptions.find((o) => o.id === bread)?.name}</li>
              {proteins.map((id) => (
                <li key={id}>{proteinOptions.find((o) => o.id === id)?.name}</li>
              ))}
              {toppings.map((id) => (
                <li key={id}>{toppingOptions.find((o) => o.id === id)?.name}</li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] leading-relaxed text-gray-600">
              Pide tu creación en local o a domicilio. Menciona tu configuración al
              hacer el pedido.
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}