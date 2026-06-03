import './styles/global.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 860, margin: '2rem auto', padding: '0 1rem' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Awards />
        <Contact />
      </main>
    </>
  )
}
