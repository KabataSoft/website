/*
  Logo oficial de Kabata Soft: el ícono de montañas es la imagen oficial
  (recortada del logo.png del sitio en producción, con fondo transparente)
  y el wordmark "KB Soft" se mantiene en SVG para que el "KB" cambie de
  tinta según el tema (negro en claro, blanco en oscuro).
*/
export default function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="Kabata Soft — Inicio">
      <img className="logo-mtn" src="logo-mountains.png" alt="" />
      <svg className="logo-svg" viewBox="252 46 388 111" role="img" aria-label="KB Soft">
        <text
          x="262"
          y="155"
          fontFamily="'Archivo', 'Instrument Sans', sans-serif"
          fontWeight="900"
          fontSize="148"
          letterSpacing="-4"
          fill="var(--logo-ink, #141414)"
        >
          KB
        </text>
        <text
          x="508"
          y="155"
          fontFamily="'Archivo', 'Instrument Sans', sans-serif"
          fontWeight="800"
          fontSize="54"
          fill="#c1281e"
        >
          Soft
        </text>
      </svg>
    </a>
  )
}
