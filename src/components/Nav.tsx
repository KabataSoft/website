import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { useTheme } from '../theme'
import Logo from './Logo'

export default function Nav() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicios', label: t.nav.services },
    { href: '#ia', label: t.nav.ai },
    { href: '#nosotros', label: t.nav.about },
    { href: '#clientes', label: t.nav.clients },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav aria-label="principal">
          <ul className={`nav-links ${open ? 'is-open' : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Idioma / Language">
            <button
              className={lang === 'es' ? 'is-active' : ''}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t.nav.darkMode : t.nav.lightMode}
            title={theme === 'light' ? t.nav.darkMode : t.nav.lightMode}
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.4 14.2A8.5 8.5 0 0 1 9.8 3.6a8.5 8.5 0 1 0 10.6 10.6Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" />
              </svg>
            )}
          </button>
          <a className="nav-cta" href="#contacto">
            {t.nav.cta}
          </a>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
