export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
  embedUrl: string;
  image: string;
}

export const locations: Location[] = [
  {
    id: "centro",
    name: "Centro",
    address: "Calle Moreno Monroy, 5 · Málaga",
    phone: "951 333 374",
    hours: "Martes a Domingo · 13:30–16:30 / 20:00–23:30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+Moreno+Monroy+5+Malaga",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-4.4214!3d36.7202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQzJzEyLjciTiA0wrAyNScxNy4wIlc!5e0!3m2!1ses!2ses!4v1",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: "calderon",
    name: "Cerrado de Calderón",
    address: "Paseo Cerrado de Calderón, 14 · Málaga",
    phone: "951 532 004",
    hours: "Martes a Domingo · 13:30–16:30 / 20:00–23:30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Paseo+Cerrado+de+Calderon+14+Malaga",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-4.4080!3d36.7100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzM2LjAiTiA0wrAyNCc0OC4wIlc!5e0!3m2!1ses!2ses!4v1",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  },
];

export const deliveryLinks = {
  glovo: "https://glovoapp.com/es/es/malaga/stores/la-burguesita-malaga",
  uberEatsCentro:
    "https://www.ubereats.com/es/store/la-burguesita-monroy/zrPQUPOFVn-l0qUTsexjgQ",
  uberEatsCalderon:
    "https://www.ubereats.com/es/store/la-burguesita-calderon/zEP5l0rOVy2JrIjxE88BRA",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/laburguesitamalaga/",
};