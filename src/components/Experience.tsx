import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import './Experience.scss'

export default function Experience() {
  const experience = useSelector((s: RootState) => s.portfolio.experience)
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience__cards">
        {experience.map((job) => (
          <div className="experience__card" key={job.company}>
            <div className="experience__header">
              <div>
                <h3>{job.title}</h3>
                <span className="experience__company">{job.company}</span>
                {job.location && <span className="experience__location"> · {job.location}</span>}
              </div>
              <span className="experience__period">{job.period}</span>
            </div>
            <ul>
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
