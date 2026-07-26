# Kabata Soft — Sitio web

Rediseño del sitio corporativo de Kabata Soft: tema claro ejecutivo por defecto con
modo oscuro conmutable (persistente), logo oficial KB Soft en vectorial, robot 3D
animado en el hero que simboliza la inteligencia artificial, animaciones sutiles a lo
largo de la página (contadores, acento 3D en la sección IA, destellos en clientes) y
contenido bilingüe ES/EN.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Three.js](https://threejs.org) con `@react-three/fiber` (escena 3D)
- CSS moderno con custom properties (sin frameworks de CSS)
- Tipografías: Clash Display (Fontshare), Instrument Sans y JetBrains Mono (Google Fonts)

## Desarrollo local

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # previsualizar el build
```

## Publicación en GitHub Pages (gratuito)

El workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) compila y
publica automáticamente en cada push a `main`. GitHub Actions y Pages son gratuitos
para repositorios públicos.

Pasos para publicar en el repositorio `KabataSoft/website`:

1. Copiar el contenido de este proyecto al repositorio (reemplazando el sitio anterior).
2. En GitHub: **Settings → Pages → Build and deployment → Source** y seleccionar
   **GitHub Actions** (una sola vez).
3. Hacer push a `main`. El sitio queda publicado en la URL de Pages del repositorio.

La configuración `base: './'` de [vite.config.ts](vite.config.ts) hace que el build
funcione tanto en `kabatasoft.github.io/website` como con un dominio propio.

## Estructura

```
src/
  components/     # Nav, Hero, Servicios, IA, Proceso, Cifras, Nosotros, Contacto…
  components/HeroRobot.tsx # robot 3D animado del hero (three.js)
  i18n/           # diccionarios ES/EN y contexto de idioma
  styles/global.css        # sistema de diseño completo
public/
  clients/        # logos de clientes (BAC, Cuestamoras, TeleDólar, Credid)
```

## Notas

- **Formulario de contacto**: usa Web3Forms (servicio gratuito), el mismo servicio
  y la misma clave pública que el sitio en producción. El visitante llena los campos
  y el mensaje llega directo al correo configurado en la cuenta de Web3Forms.
- **Google Analytics**: se mantiene el mismo ID del sitio en producción
  (`G-PWDP1CCRL4`), cargado desde `index.html`.
- **SEO**: `index.html` incluye título y descripción optimizados, canonical a
  `www.kabatasoft.com`, Open Graph + Twitter Cards (imagen `og-image.png`),
  datos estructurados JSON-LD (Organization) y `robots.txt` + `sitemap.xml`
  en `public/`. El favicon y el ícono de iOS usan las montañas del logo oficial.
- **Logo**: versión vectorial fiel del logo oficial KB Soft (cordillera roja +
  monograma) en `src/components/Logo.tsx`. El "KB" cambia de tinta según el tema
  (negro en claro, blanco en oscuro); el rojo de marca `#C1281E` es constante.
- **Temas**: claro por defecto; el conmutador de la barra de navegación guarda la
  preferencia en `localStorage` y un script en `index.html` la aplica antes del
  primer pintado para evitar parpadeos.
- **Accesibilidad**: el sitio respeta `prefers-reduced-motion`, tiene foco visible
  y la escena 3D está marcada como decorativa (`aria-hidden`).
