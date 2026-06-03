import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import './Hero.scss'

export default function Hero() {
  const { name, title, email, phone, location, linkedin, github } = useSelector(
    (s: RootState) => s.portfolio.personal
  )
  return (
    <section className="hero" id="about">
      <div className="hero__avatar">{name.split(' ').map(n => n[0]).join('')}</div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="hero__links">
        <span>📍 {location}</span>
        <span>📞 {phone}</span>
        <a href={`mailto:${email}`}>✉️ {email}</a>
        <a href={linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        <a href={github} target="_blank" rel="noreferrer">💻 GitHub</a>
      </div>
    </section>
  )
}
