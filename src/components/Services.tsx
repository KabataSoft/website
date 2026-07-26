import { useI18n } from '../i18n'
import Reveal from './Reveal'

const ICONS = [
  // código
  <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
  </svg>,
  // equipo
  <svg key="team" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.8 20c.8-3.2 3.2-5 6.2-5s5.4 1.8 6.2 5" />
    <circle cx="17.5" cy="9.5" r="2.4" />
    <path d="M15.5 14.6c2.6.2 4.7 1.7 5.5 4.4" />
  </svg>,
  // brújula
  <svg key="compass" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>,
  // escudo
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 4.5 6v5c0 4.8 3.2 8.4 7.5 10 4.3-1.6 7.5-5.2 7.5-10V6z" />
    <path d="m9 12 2 2 4-4.5" />
  </svg>,
]

export default function Services() {
  const { t } = useI18n()

  return (
    <section className="section" id="servicios">
      <div className="ambient ambient--bl" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-intro">{t.services.intro}</p>
        </Reveal>
        <div className="services-grid">
          {t.services.items.map((item, i) => (
            <Reveal key={item.title} className="service-card" as="article" delay={i * 80}>
              <div className="service-icon" aria-hidden="true">
                {ICONS[i]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
