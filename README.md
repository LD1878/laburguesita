# La Burguesita

Sitio web premium en blanco y negro para **La Burguesita**, la pionera de las hamburguesas gourmet en Málaga desde 2010.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod
- Lucide Icons

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |

## GitHub Pages (producción)

El sitio se despliega automáticamente en cada push a `main` vía GitHub Actions.

**URL:** https://ld1878.github.io/laburguesita/

### Configuración en GitHub (solo una vez)

1. Ve a **Settings → Pages**
2. En **Build and deployment → Source**, selecciona **GitHub Actions**
3. Tras el primer push, el workflow `Deploy to GitHub Pages` publicará el sitio

### Build local (igual que en CI)

```bash
npm run build:pages
```

El sitio estático se genera en la carpeta `out/`. Para previsualizar:

```bash
npx serve out
```

Abre http://localhost:3000/laburguesita/

## Despliegue en Vercel (alternativa)

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Build Command: `npm run build` (sin `GITHUB_PAGES`)
3. Deploy

## Estructura

```
src/
├── app/
│   ├── layout.tsx      # Layout, fuentes, SEO, JSON-LD
│   ├── page.tsx        # Single-page experience
│   ├── globals.css     # Design system
│   └── menu-print/     # Versión imprimible de la carta
├── components/         # Secciones y UI
└── lib/
    ├── data/           # Menú, locales, testimonios
    └── schemas/        # Validación de reservas
```

## Notas

- Las imágenes usan Unsplash en B/N. Sustituir por fotografía profesional del restaurante.
- El formulario de reserva muestra confirmación local; conectar a backend/WhatsApp API en producción.
- Carta imprimible disponible en `/menu-print`.