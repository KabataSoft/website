import { useI18n } from '../i18n'
import Logo from './Logo'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <Logo />
            <p className="footer-meta" style={{ marginTop: 14, maxWidth: 340 }}>
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <ul className="footer-links">
              <li>
                <a href="#servicios">{t.nav.services}</a>
              </li>
              <li>
                <a href="#ia">{t.nav.ai}</a>
              </li>
              <li>
                <a href="#nosotros">{t.nav.about}</a>
              </li>
              <li>
                <a href="#contacto">{t.nav.contact}</a>
              </li>
            </ul>
            <p className="footer-meta" style={{ marginTop: 14, textAlign: 'right' }}>
              © {year} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
