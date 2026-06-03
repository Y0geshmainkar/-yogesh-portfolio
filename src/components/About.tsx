import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import './About.scss'

export default function About() {
  const { summary } = useSelector((s: RootState) => s.portfolio.personal)
  return (
    <section className="about" id="about-summary">
      <h2>About</h2>
      <p>{summary}</p>
    </section>
  )
}
