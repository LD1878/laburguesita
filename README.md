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

## Despliegue en Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com)
2. Framework Preset: **Next.js** (detectado automáticamente)
3. Build Command: `npm run build`
4. Output Directory: `.next` (por defecto)
5. Deploy

No se requieren variables de entorno para el despliegue básico.

### Dominio personalizado

En Vercel → Project Settings → Domains, añade tu dominio (ej. `laburguesita.es`).

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