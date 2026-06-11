export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "La mejor hamburguesa de Málaga. Sin discusión.",
    author: "Viajero gastronómico",
    source: "TripAdvisor",
  },
  {
    id: "2",
    quote: "15 años y sigue siendo imbatible. La Favorita es una obra de arte.",
    author: "@malagafoodie",
    source: "Instagram",
  },
  {
    id: "3",
    quote: "Pioneros de verdad. Aquí empezó todo en la ciudad.",
    author: "Cliente habitual",
    source: "Google Reviews",
  },
  {
    id: "4",
    quote: "Carne nacional de primera, creatividad sin excesos. Así se hace.",
    author: "Crítico local",
    source: "Diario SUR",
  },
  {
    id: "5",
    quote: "Reservar mesa aquí se siente como un ritual. Y la burger, sublime.",
    author: "Marta L.",
    source: "TripAdvisor",
  },
];