import { lazy, Suspense } from 'react'
import { useI18n } from '../i18n'
import Reveal from './Reveal'

const AIAccent = lazy(() => import('./AIAccent'))

export default function AISection() {
  const { t } = useI18n()

  return (
    <section className="section ai-section" id="ia">
      <div className="ai-accent" aria-hidden="true">
        <Suspense fallback={null}>
          <AIAccent />
        </Suspense>
      </div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.ai.eyebrow}</p>
        </Reveal>
        <div className="ai-grid">
          <Reveal>
            <h2 className="section-title">{t.ai.title}</h2>
            <p className="ai-lede">{t.ai.lede}</p>
          </Reveal>
          <div className="ai-items">
            {t.ai.items.map((item, i) => (
              <Reveal key={item.title} className="ai-item" delay={i * 100}>
                <span className="ai-item-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
