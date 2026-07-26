import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import Reveal from './Reveal'

/* Contador animado: la cifra sube de 0 a su valor al entrar en pantalla */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([^0-9]*)(\d+)(.*)$/)
    if (!el || !match) {
      setDisplay(value)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    const [, prefix, numStr, suffix] = match
    const target = parseInt(numStr, 10)
    setDisplay(`${prefix}0${suffix}`)

    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <div ref={ref} className="stat-value">
      {display}
    </div>
  )
}

export default function Stats() {
  const { t } = useI18n()

  return (
    <section className="section stats" id="cifras">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.stats.eyebrow}</p>
          <h2 className="section-title">{t.stats.title}</h2>
        </Reveal>
        <div className="stats-grid">
          {t.stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <StatValue value={item.value} />
              <p className="stat-label">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
