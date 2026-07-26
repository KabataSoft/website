import { useI18n } from '../i18n'
import Reveal from './Reveal'

export default function Process() {
  const { t } = useI18n()

  return (
    <section className="section" id="proceso">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="section-title">{t.process.title}</h2>
        </Reveal>
        <div className="process-grid">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} className="process-step" delay={i * 110}>
              <span className="process-num">
                {t.process.phase.toUpperCase()} {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
