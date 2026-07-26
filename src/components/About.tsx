import { useI18n } from '../i18n'
import Reveal from './Reveal'

export default function About() {
  const { t } = useI18n()

  return (
    <section className="section" id="nosotros">
      <div className="ambient ambient--tr" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-body">
            <h2 className="section-title">{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </Reveal>
          <div className="values-list">
            {t.about.values.map((v, i) => (
              <Reveal key={v.title} className="value-item" delay={i * 100}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
