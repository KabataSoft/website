import { useI18n } from '../i18n'
import Reveal from './Reveal'

const CLIENTS = [
  { src: 'clients/BAC.svg', alt: 'BAC', tall: false },
  { src: 'clients/cuestamoras.png', alt: 'Cuestamoras', tall: true },
  { src: 'clients/teledolar.png', alt: 'TeleDólar', tall: false },
  { src: 'clients/credid.png', alt: 'Credid', tall: true },
]

export default function Clients() {
  const { t } = useI18n()

  return (
    <section className="clients" id="clientes">
      <div className="container">
        <div className="clients-head">
          <p className="eyebrow">{t.clients.eyebrow}</p>
        </div>
        <div className="clients-grid">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.alt} className="client-card" delay={i * 90}>
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className={c.tall ? 'client-logo--tall' : undefined}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
