// Navbar owns the boolean that controls the mobile menu.
import { useState } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function handleNavClick(event) {
    event.preventDefault()
    document.getElementById(event.currentTarget.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav id="navbar">
      <div className="nav-brand"><span>Alex Johnson</span></div>
      <ul id="nav-menu" className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(section => (
          <li key={section}><a className="nav-link" href={`#${section.toLowerCase()}`} onClick={handleNavClick}>{section}</a></li>
        ))}
      </ul>
      <button type="button" className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen} aria-controls="nav-menu" onClick={() => setIsMobileMenuOpen(previous => !previous)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

export default Navbar
