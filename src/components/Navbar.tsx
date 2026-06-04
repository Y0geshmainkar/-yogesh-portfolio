import { useState, useEffect } from 'react'
import './Navbar.scss'

const links = ['About', 'Skills', 'Experience', 'Awards', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(l) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <span className="navbar__brand">YM</span>
      <ul>
        {links.map((l) => (
          <li key={l} className={active === l ? 'active' : ''} onClick={() => scroll(l)}>{l}</li>
        ))}
      </ul>
    </nav>
  )
}
