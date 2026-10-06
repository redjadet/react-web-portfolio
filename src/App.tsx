import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useLocale } from './i18n/useLocale'

export default function App() {
  const { t } = useLocale()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skipToContent}
      </a>
      <div id="top">
        <Header />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
