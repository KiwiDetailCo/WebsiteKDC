import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import { BUSINESS } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img src="/logo.png" alt="Kiwi Detail Co. logo" className="brand-logo" />
              <span className="name">Kiwi Detail Co.<small>KERIKERI · NZ</small></span>
            </div>
            <p style={{ color: 'var(--muted)', maxWidth: 320, lineHeight: 1.6, fontSize: 15 }}>
              Premium mobile car detailing in Kerikeri & the Bay of Islands. We treat every vehicle like our own.
            </p>
            <div className="socials">
              <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon.fb /></a>
              <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.ig /></a>
              <a href={`mailto:${BUSINESS.email}`} aria-label="Email"><Icon.mail /></a>
            </div>
          </div>

          <div>
            <h5>Explore</h5>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing & Packages</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About & FAQ</Link>
            <Link to="/contact">Book Now</Link>
          </div>

          <div>
            <h5>Get in touch</h5>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            <a style={{ cursor: 'default' }}>Kerikeri, Bay of Islands</a>
            <a style={{ cursor: 'default' }}>Mon–Sat by appointment</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Kiwi Detail Co. All rights reserved.</span>
          <span>Made with care in Kerikeri 🇳🇿</span>
        </div>
      </div>
    </footer>
  )
}
