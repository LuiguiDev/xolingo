/*
Archivo: Xolingo — Starter (un solo archivo para preview)
Incluye:
  - tailwind.config.js (snippet)
  - src/index.css (snippet con variables CSS)
  - Tipos TS, datos de ejemplo y componentes React funcionales

Instrucciones rápidas:
  - Copie las secciones de tailwind.config.js e index.css a sus archivos reales.
  - Este componente espera que Tailwind esté instalado y configurado.
*/

// tailwind.config.js (snippet) -------------------------------------------
// module.exports = {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--color-primary)',
//         accent: 'var(--color-accent)',
//         bg: 'var(--color-bg)',
//         surface: 'var(--color-surface)',
//         text: 'var(--color-text)'
//       }
//     }
//   },
//   plugins: []
//}

// src/index.css (snippet) ------------------------------------------------
// :root {
//   --color-primary: #0f766e; /* verde-oscuro */
//   --color-accent: #eab308;  /* amarillo */
//   --color-bg: #f8fafc;      /* fondo */
//   --color-surface: #ffffff; /* tarjetas */
//   --color-text: #0f172a;    /* texto */
// }
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// -----------------------------------------------------------------------
// Código React + TypeScript
import React from 'react'

// Tipos ---------------------------------------------------------------
type Word = {
  id: string
  nahuatl: string
  spanish: string
  gloss: string
  etymology: string
  story: string
  endemic: boolean
  image?: string // url
}

// Datos de ejemplo (mínimo) -------------------------------------------
const EXAMPLE_WORDS: Word[] = [
  {
    id: '1',
    nahuatl: 'chapulín',
    spanish: 'chapulín',
    gloss: 'Saltamontes comestible, frecuentemente asado o frito',
    etymology: "Del náhuatl 'chapolin' (saltarín).",
    story:
      'En poblaciones rurales, el chapulín aparece en mercados y festividades. Saber su nombre en náhuatl conecta su consumo con prácticas locales y temporadas de lluvia.',
    endemic: true,
    image: ''
  },
  {
    id: '2',
    nahuatl: 'xoloitzcuintli',
    spanish: 'xoloitzcuintle',
    gloss: 'Perro nativo de México, asociado a mitos y al inframundo',
    etymology: "Del náhuatl 'xōlōitzcuintli' — xōlōtl (dios o chamuco), itzcuintli (perro)",
    story:
      'Los xolo eran compañeros en el mundo prehispánico; conocer la palabra permite reconocer referencias a lugares y artesanías que usan su imagen.',
    endemic: true,
    image: ''
  }
]

// Componentes --------------------------------------------------------
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-accent/10 text-accent">
      {children}
    </span>
  )
}

function WordCard({ w }: { w: Word }) {
  return (
    <article className="bg-surface p-4 rounded-2xl shadow-sm border border-gray-100">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-text">{w.nahuatl}</h3>
          <p className="text-sm text-gray-600">{w.spanish} • {w.gloss}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {w.endemic ? <Badge>Endémico</Badge> : <Badge>Prestado</Badge>}
          <small className="text-xs text-gray-400">ID: {w.id}</small>
        </div>
      </header>

      <section className="mt-3 text-sm text-gray-700">
        <strong className="block text-xs text-gray-500">Etimología</strong>
        <p className="mt-1">{w.etymology}</p>
      </section>

      <section className="mt-3 text-sm text-gray-700">
        <strong className="block text-xs text-gray-500">Narrativa</strong>
        <p className="mt-1">{w.story}</p>
      </section>

      <footer className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Origen: náhuatl</span>
        <button className="px-3 py-1 rounded-full border text-sm border-gray-200 hover:bg-gray-50">Ver más</button>
      </footer>
    </article>
  )
}

function StoryList({ words }: { words: Word[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {words.map((w) => (
        <WordCard key={w.id} w={w} />
      ))}
    </div>
  )
}

// Esquema mínimo para APIs / DB --------------------------------------
/*
Word collection schema (JSON):
{
  id: string,
  nahuatl: string,
  spanish: string,
  gloss: string,
  etymology: string,
  story: string,       // narrativa breve pensada para evocar imagenes / lugares
  endemic: boolean,   // marca contenido relevante a fauna/flora mexicana
  audioUrl?: string,   // pronunciación (opcional)
  imageUrl?: string,
  tags?: string[]      // p.ej. ['animales', 'lugares', 'comida']
}
*/

// App principal ------------------------------------------------------
export default function App() {
  return (
    <main className="min-h-screen bg-bg text-text p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">Xolingo</h1>
          <p className="text-sm text-gray-600 mt-1">Vocabulario español con raíz náhuatl — aprendizaje narrativo.</p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-4">Historias y palabras</h2>
          <StoryList words={EXAMPLE_WORDS} />
        </section>

        <aside className="mt-8 text-xs text-gray-500">
          <strong>Nota técnica:</strong> use variables CSS en :root como se muestra arriba para ajustar paleta fácilmente.
        </aside>
      </div>
    </main>
  )
}
