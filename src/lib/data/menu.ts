export type MenuCategory =
  | "clasicas"
  | "smash"
  | "fabrica"
  | "acompanamientos"
  | "postres";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  image: string;
  badge?: string;
}

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "clasicas", label: "Clásicas & Signature" },
  { id: "smash", label: "Smash Burgers" },
  { id: "fabrica", label: "Crea tu Burger" },
  { id: "acompanamientos", label: "Acompañamientos" },
  { id: "postres", label: "Postres" },
];

export const burgerDelMes: MenuItem = {
  id: "burger-del-mes",
  name: "Burger del Mes — Chicken Staff",
  description:
    "Edición limitada. Pollo campero crujiente, doble cheddar, salsa Meri, cebolla crujiente, bacon y chicken finger en pan Potato Roll.",
  price: 13.5,
  ingredients: [
    "Pollo campero 100%",
    "Queso cheddar",
    "Salsa Meri",
    "Bacon",
    "Pan Potato Roll",
  ],
  image:
    "https://images.unsplash.com/photo-1568900136636-522a5fad6b9b?w=800&q=80",
  badge: "Edición Limitada",
};

export const signatureBurgers: MenuItem[] = [
  {
    id: "la-favorita",
    name: "La Favorita",
    description:
      "Nuestra joya de la corona. Carne nacional con crema de queso curado, papada ibérica y croqueta de buey integrada.",
    price: 15.9,
    ingredients: [
      "Vaca nacional 100%",
      "Crema queso curado",
      "Papada ibérica",
      "Cheddar ahumado",
      "Croqueta de buey",
    ],
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    badge: "Top 5",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    description:
      "Sobriedad y lujo en cada bocado. Foie fresco sobre carne nacional, meat mayo y cebolla pochada.",
    price: 15.5,
    ingredients: ["Vaca nacional 100%", "Foie fresco", "Meat mayo", "Cebolla pochada"],
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
  },
  {
    id: "the-original",
    name: "The Original",
    description:
      "Desde 2013. La que definió nuestro estilo: salsa Burguesita con togarashi, rúcula y tomillo.",
    price: 13.0,
    ingredients: [
      "Vaca nacional 100%",
      "Salsa Burguesita",
      "Cebolla pochada",
      "Rúcula",
      "Tomillo",
    ],
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
    badge: "Desde 2013",
  },
  {
    id: "little-gon",
    name: "Little Gon",
    description:
      "Tercer puesto Burger Showdown 2023. Mexican pesto rojo y cremoso de leche frita.",
    price: 15.0,
    ingredients: [
      "Vaca nacional 100%",
      "Meat mayo",
      "Bacon",
      "Mexican pesto rojo",
      "Leche frita",
    ],
    image:
      "https://images.unsplash.com/photo-1594212699903-2bf8b4b6b8b5?w=800&q=80",
    badge: "Premiada",
  },
  {
    id: "croboletus",
    name: "Croboletus",
    description:
      "Mayonesa de trufa negra con croqueta de boletus integrada en la carne. Umami puro.",
    price: 14.0,
    ingredients: [
      "Vaca nacional 100%",
      "Mayo trufa negra",
      "Croqueta boletus",
      "Cebolla pochada",
      "Lechuga",
    ],
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80",
  },
  {
    id: "meri-love",
    name: "Meri Love",
    description:
      "Nuestra interpretación de la legendaria Emmy Burger de Nueva York.",
    price: 13.5,
    ingredients: [
      "Vaca nacional 100%",
      "Salsa Meri",
      "Cebolla pochada",
      "Cheddar",
      "Rúcula",
      "Bacon",
    ],
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    badge: "Top 5",
  },
  {
    id: "santi-hate",
    name: "Santi Hate",
    description:
      "Participante en el III Campeonato de España de Hamburguesas. Intensa y memorable.",
    price: 14.5,
    ingredients: [
      "Vaca nacional 100%",
      "Mayo Kanalla",
      "Cheddar ahumado",
      "Chicken fingers",
      "Bacon",
    ],
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
  },
  {
    id: "la-pulled-bbq",
    name: "La Pulled BBQ",
    description:
      "Carne nacional con pulled pork BBQ, jalapeños y cebolla crujiente.",
    price: 15.0,
    ingredients: [
      "Vaca nacional 100%",
      "Pulled pork BBQ",
      "Salsa BBQ",
      "Cheddar",
      "Jalapeños",
    ],
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80",
  },
];

export const smashBurgers: MenuItem[] = [
  {
    id: "trufita",
    name: "Trufita",
    description:
      "Doble smash de 90g. Mayo trufa, cheddar y cebolla pochada en pan potato roll.",
    price: 10.9,
    ingredients: [
      "Doble patty 90g",
      "Vaca nacional",
      "Mayo trufa",
      "Cheddar",
      "Cebolla pochada",
    ],
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80",
    badge: "Más vendida",
  },
  {
    id: "carnica",
    name: "Cárnica",
    description:
      "Doble smash con meat mayo, cheddar y onion bits. Pureza carnívora.",
    price: 10.9,
    ingredients: ["Doble patty 90g", "Meat mayo", "Cheddar", "Onion bits"],
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
    badge: "Top 1",
  },
  {
    id: "emmy-by-meri",
    name: "Emmy by Meri",
    description: "Salsa Meri, cheddar y cebolla pochada. El espíritu de NY en Málaga.",
    price: 10.9,
    ingredients: [
      "Doble patty 90g",
      "Salsa Meri",
      "Cheddar",
      "Cebolla pochada",
    ],
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
  },
  {
    id: "cheese-bacon",
    name: "Cheese Bacon",
    description: "Salsa Burguesita, cheddar y bacon crujiente. Clásico irreverente.",
    price: 10.9,
    ingredients: ["Doble patty 90g", "Salsa Burguesita", "Cheddar", "Bacon"],
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80",
  },
  {
    id: "georgina-bbq",
    name: "Georgina BBQ",
    description: "Salsa BBQ, cheddar y onion bits. Ahumada y contundente.",
    price: 10.9,
    ingredients: ["Doble patty 90g", "Salsa BBQ", "Cheddar", "Onion bits"],
    image:
      "https://images.unsplash.com/photo-1568900136636-522a5fad6b9b?w=800&q=80",
  },
];

export const sides: MenuItem[] = [
  {
    id: "las-frikis",
    name: "Las Frikis",
    description:
      "Patatas caseras con cheddar, meat mayo, crema de queso curado y chilli con carne.",
    price: 8.9,
    ingredients: ["Patatas caseras", "Cheddar", "Meat mayo", "Chilli con carne"],
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
  },
  {
    id: "las-chonis",
    name: "Las Chonis",
    description: "Patatas con pulled pork BBQ, cheddar y salsa Meri.",
    price: 8.4,
    ingredients: ["Patatas caseras", "Pulled pork", "Cheddar", "Salsa Meri"],
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d4e6c92a?w=800&q=80",
  },
  {
    id: "las-pijas",
    name: "Las Pijas",
    description: "Patatas con papada ibérica y crema de queso curado.",
    price: 7.9,
    ingredients: ["Patatas caseras", "Papada ibérica", "Crema queso curado"],
    image:
      "https://images.unsplash.com/photo-1518977821214-86e6a0c6d0f0?w=800&q=80",
  },
  {
    id: "gyozas-buey",
    name: "Gyozas de Buey",
    description: "Seis unidades. Gyozas fritas de buey a la parrilla.",
    price: 9.9,
    ingredients: ["Buey a la parrilla", "Masa artesanal"],
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
  },
  {
    id: "croquetas-buey",
    name: "Croquetas de Buey",
    description: "Seis unidades. Auténtico buey, cremosas, rebozadas en panko.",
    price: 9.9,
    ingredients: ["Buey auténtico", "Bechamel", "Panko"],
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=800&q=80",
  },
  {
    id: "red-nachos",
    name: "Chilaquiles Red Nachos",
    description:
      "Nachos rojos, salsa verde mexicana, crema agria, chilli y jalapeños.",
    price: 12.5,
    ingredients: ["Nachos rojos", "Salsa verde", "Chilli con carne", "Jalapeños"],
    image:
      "https://images.unsplash.com/photo-1513456852971-3c5a7beafd08?w=800&q=80",
  },
];

export const desserts: MenuItem[] = [
  {
    id: "leche-frita",
    name: "Leche Frita",
    description: "El postre andaluz por excelencia. Cremoso, crujiente, inolvidable.",
    price: 5.9,
    ingredients: ["Leche", "Harina", "Azúcar", "Canela"],
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
  },
  {
    id: "cheesecake",
    name: "Cheesecake Sorpresa",
    description: "¿Tradicional o sabor especial? Quien no arriesga, no gana.",
    price: 5.9,
    ingredients: ["Queso crema", "Galleta", "Sorpresa del chef"],
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80",
  },
  {
    id: "brownie",
    name: "Brownie de Chocolate",
    description: "Intenso, denso, perfectamente equilibrado.",
    price: 5.9,
    ingredients: ["Chocolate negro", "Mantequilla", "Nueces"],
    image:
      "https://images.unsplash.com/photo-1607922267095-0b35e9df7e6f?w=800&q=80",
  },
];