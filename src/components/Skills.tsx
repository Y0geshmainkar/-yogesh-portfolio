import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import './Skills.scss'

export default function Skills() {
  const skills = useSelector((s: RootState) => s.portfolio.skills)
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      {skills.map((s) => (
        <div className="skills__row" key={s.label}>
          <span className="skills__label">{s.label}</span>
          <div className="skills__chips">
            {s.value.split('|').map((chip) => (
              <span className="chip" key={chip.trim()}>{chip.trim()}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
