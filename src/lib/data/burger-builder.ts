export interface BuilderOption {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export const basePrice = 10.21;

export const pattyOptions: BuilderOption[] = [
  { id: "single", name: "Patty simple (180g)", price: 0 },
  { id: "double", name: "Doble patty (360g)", price: 3.5 },
];

export const cheeseOptions: BuilderOption[] = [
  { id: "cheddar", name: "Cheddar", price: 0 },
  { id: "cheddar-smoked", name: "Cheddar ahumado inglés", price: 1.2 },
  { id: "curado", name: "Crema de queso curado", price: 1.5 },
];

export const proteinOptions: BuilderOption[] = [
  { id: "papada", name: "Papada ibérica", price: 2.8, description: "Premium" },
  { id: "foie", name: "Foie fresco", price: 4.5, description: "Premium" },
  { id: "bacon", name: "Bacon Duroc", price: 1.8 },
  { id: "croqueta", name: "Croqueta de buey integrada", price: 2.5 },
  { id: "pulled", name: "Pulled pork BBQ", price: 2.2 },
];

export const sauceOptions: BuilderOption[] = [
  { id: "burguesita", name: "Salsa Burguesita", price: 0 },
  { id: "meri", name: "Salsa Meri", price: 0 },
  { id: "trufa", name: "Mayo trufa", price: 1.5 },
  { id: "bbq", name: "Salsa BBQ", price: 0 },
  { id: "kanalla", name: "Mayo Kanalla", price: 0 },
];

export const toppingOptions: BuilderOption[] = [
  { id: "rucula", name: "Rúcula", price: 0.5 },
  { id: "cebolla-pochada", name: "Cebolla pochada", price: 0.5 },
  { id: "cebolla-crujiente", name: "Cebolla crujiente", price: 0.5 },
  { id: "jalapenos", name: "Jalapeños", price: 0.8 },
  { id: "tomillo", name: "Tomillo fresco", price: 0.3 },
];

export const breadOptions: BuilderOption[] = [
  { id: "brioche", name: "Pan brioche artesano", price: 0 },
  { id: "potato-roll", name: "Potato Roll by Juanito Baker", price: 1.0 },
];