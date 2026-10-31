// El HTML de la página, generado en el build (`scripts/prerender.mjs`): así el contenido está
// en el HTML que reciben los buscadores y los asistentes que no ejecutan JavaScript (Bing,
// ChatGPT, Claude, Perplexity). Es el mismo que pinta React en el navegador.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'

export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
