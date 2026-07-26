import { I18nProvider } from './i18n'
import { ThemeProvider } from './theme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import AISection from './components/AISection'
import Process from './components/Process'
import Stats from './components/Stats'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="site-content">
        <Nav />
        <main>
          <Hero />
          <Clients />
          <Services />
          <AISection />
          <Process />
          <Stats />
          <About />
          <Contact />
        </main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  )
}
