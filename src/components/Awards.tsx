import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import './Awards.scss'

export default function Awards() {
  const awards = useSelector((s: RootState) => s.portfolio.awards)
  return (
    <section className="awards" id="awards">
      <h2>Awards & Recognition</h2>
      <div className="awards__cards">
        {awards.map((a) => (
          <div className="awards__card" key={a.title}>
            <span className="awards__icon">🏆</span>
            <div>
              <strong>{a.title}</strong>
              <p>{a.org} · {a.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
