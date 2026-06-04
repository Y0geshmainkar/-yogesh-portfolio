import { useEffect, useState } from 'react'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Contact from './components/Contact'

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('section').forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, height: 3, width: `${progress}%`, background: '#f5c518', zIndex: 999, transition: 'width 0.1s' }} />
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
