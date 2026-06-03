import './Navbar.scss'

const links = ['About', 'Skills', 'Experience', 'Awards', 'Contact']

export default function Navbar() {
  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="navbar">
      <span className="navbar__brand">YM</span>
      <ul>
        {links.map((l) => (
          <li key={l} onClick={() => scroll(l)}>{l}</li>
        ))}
      </ul>
    </nav>
  )
}
