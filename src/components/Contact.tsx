import { useState } from 'react'
import type { FormEvent } from 'react'
import { useI18n } from '../i18n'
import Reveal from './Reveal'

const CONTACT_EMAIL = 'contacto@kabatasoft.com'
// mismo servicio y clave pública que el sitio en producción (web3forms.com)
const WEB3FORMS_KEY = '6eaac1c2-c825-4a8a-8afc-87dedc42b08b'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo mensaje del sitio web — ${form.name}`,
          from_name: 'Sitio web Kabata Soft',
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contacto">
      <div className="ambient ambient--bl" aria-hidden="true" />
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-info">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <p className="form-note" style={{ marginBottom: 10 }}>
              {t.contact.emailLabel}
            </p>
            <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </Reveal>
          <Reveal delay={120}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder={t.contact.company}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <textarea
                name="message"
                placeholder={t.contact.message}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div>
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t.contact.sending : t.contact.send}
                </button>
              </div>
              {status === 'success' && (
                <p className="form-status form-status--ok" role="status">
                  {t.contact.success}
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--error" role="alert">
                  {t.contact.error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
