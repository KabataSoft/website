// Mete en dist/index.html el HTML que genera la app, en lugar del <div id="root"> vacío. React
// lo reemplaza al cargar (createRoot), así que lo que ve la persona es lo mismo de siempre.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const html = render()
const archivo = resolve('dist/index.html')
const pagina = readFileSync(archivo, 'utf8')
if (!pagina.includes('<div id="root"></div>')) throw new Error('no encuentro <div id="root"></div> en dist/index.html')
writeFileSync(archivo, pagina.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log(`prerenderizado: ${html.length} caracteres de HTML en dist/index.html`)
