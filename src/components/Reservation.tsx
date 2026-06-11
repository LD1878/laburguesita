"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  reservationSchema,
  type ReservationFormData,
} from "@/lib/schemas/reservation";

const timeSlots = [
  "13:30", "14:00", "14:30", "15:00", "15:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00",
];

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
      location: "centro",
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Reservation:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="reserva"
      className="relative bg-black-rich py-32 lg:py-40"
      aria-labelledby="reserva-heading"
    >
      <div className="grain-overlay-light" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
              Reserva tu Mesa
            </p>
            <h2
              id="reserva-heading"
              className="mt-6 font-serif text-4xl font-light tracking-wide text-white-pure md:text-5xl lg:text-6xl"
            >
              Una experiencia a tu medida
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Reserve con la misma dedicación con la que preparamos cada burger.
              Confirmaremos su reserva por teléfono o WhatsApp.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-16">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-lg border border-gray-900 bg-black-soft p-12 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-white-pure">
                  <Check size={24} strokeWidth={1} />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-white-pure">
                  Reserva recibida
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Gracias por elegir La Burguesita. Nos pondremos en contacto
                  contigo en breve por WhatsApp o teléfono para confirmar tu mesa.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white-pure"
                >
                  Nueva reserva
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-3xl border border-gray-900 bg-black-soft p-8 lg:p-12"
                noValidate
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Fecha" error={errors.date?.message}>
                    <input
                      type="date"
                      {...register("date")}
                      className="field-input"
                      aria-invalid={!!errors.date}
                    />
                  </Field>

                  <Field label="Hora" error={errors.time?.message}>
                    <select
                      {...register("time")}
                      className="field-input"
                      aria-invalid={!!errors.time}
                    >
                      <option value="">Seleccionar</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Comensales" error={errors.guests?.message}>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      {...register("guests")}
                      className="field-input"
                      aria-invalid={!!errors.guests}
                    />
                  </Field>

                  <Field label="Local preferido" error={errors.location?.message}>
                    <select
                      {...register("location")}
                      className="field-input"
                      aria-invalid={!!errors.location}
                    >
                      <option value="centro">Centro — Moreno Monroy, 5</option>
                      <option value="calderon">Cerrado de Calderón, 14</option>
                    </select>
                  </Field>

                  <Field label="Nombre" error={errors.name?.message}>
                    <input
                      type="text"
                      {...register("name")}
                      className="field-input"
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register("email")}
                      className="field-input"
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Teléfono" error={errors.phone?.message}>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="field-input"
                      aria-invalid={!!errors.phone}
                      autoComplete="tel"
                    />
                  </Field>

                  <Field label="Notas (opcional)" error={errors.notes?.message} className="md:col-span-2">
                    <textarea
                      {...register("notes")}
                      rows={3}
                      className="field-input resize-none"
                      placeholder="Alergias, celebración especial, preferencias..."
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-10 w-full border border-white-pure bg-white-pure py-4 text-[10px] uppercase tracking-[0.25em] text-black-rich transition-all duration-500 hover:bg-transparent hover:text-white-pure disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Reserva"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </SectionReveal>
      </div>

    </section>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-gray-500">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-gray-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}