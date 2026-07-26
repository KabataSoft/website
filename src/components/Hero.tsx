import { lazy, Suspense } from 'react'
import { useI18n } from '../i18n'

const HeroRobot = lazy(() => import('./HeroRobot'))

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="inicio">
      <div className="ambient ambient--tr" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero-title">
            {t.hero.title1}
            <span className="accent">{t.hero.titleAccent}</span>
            {t.hero.title2}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contacto">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn-ghost" href="#servicios">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroRobot />
          </Suspense>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        {t.hero.scrollHint}
      </div>
    </section>
  )
}
