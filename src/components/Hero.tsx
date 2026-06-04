import { useState, useEffect } from 'react'
import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { IconEmail, IconPhone, IconLocation, IconLinkedin, IconGithub } from './Icons'
import './Hero.scss'

export default function Hero() {
  const { name, title, email, phone, location, linkedin, github } = useSelector(
    (s: RootState) => s.portfolio.personal
  )
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayed(title.slice(0, ++i))
      if (i === title.length) clearInterval(timer)
    }, 60)
    return () => clearInterval(timer)
  }, [title])
  return (
    <section className="hero" id="about">
      <h1>{name}</h1>
      <h2><span>{displayed}</span><span className="hero__cursor">|</span></h2>
      <div className="hero__links">
        <span><IconLocation /> {location}</span>
        <span><IconPhone /> {phone}</span>
        <a href={`mailto:${email}`}><IconEmail /> {email}</a>
        <a href={linkedin} target="_blank" rel="noreferrer"><IconLinkedin /> LinkedIn</a>
        <a href={github} target="_blank" rel="noreferrer"><IconGithub /> GitHub</a>
      </div>
    </section>
  )
}
