import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { IconEmail, IconLinkedin, IconGithub } from './Icons'
import './Contact.scss'

export default function Contact() {
  const { email, linkedin, github } = useSelector((s: RootState) => s.portfolio.personal)
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact__links">
        <a href={`mailto:${email}`}><IconEmail /> {email}</a>
        <a href={linkedin} target="_blank" rel="noreferrer"><IconLinkedin /> LinkedIn</a>
        <a href={github} target="_blank" rel="noreferrer"><IconGithub /> GitHub</a>
      </div>
    </section>
  )
}
