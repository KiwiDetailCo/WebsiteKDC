import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from './Icons'
import { BUSINESS } from '../data/content'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Kiwi Detail Co. logo" className="brand-logo" />
          <span className="name">
            Kiwi Detail Co.
            <small>KERIKERI · NZ</small>
          </span>
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book Now
          </NavLink>
        </div>

        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <Icon.menu />
        </button>
      </div>
    </nav>
  )
}
