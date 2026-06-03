import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Icon } from '../components/Icons'
import { PACKAGES, ADDONS } from '../data/content'

export default function Pricing() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal><span className="eyebrow">Pricing & Packages</span></Reveal>
          <Reveal delay={80}><h1>Simple, honest pricing</h1></Reveal>
          <Reveal delay={140}>
            <p>Upfront and affordable, with no hidden costs. Final price depends on the size and condition of your vehicle — we’ll always confirm before we start.</p>
          </Reveal>
        </div>
      </header>

      <section className="block tight">
        <div className="wrap">
          <div className="price-grid">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.id} delay={i * 110}>
                <div className={`price-card ${p.featured ? 'featured' : ''}`}>
                  {p.featured && <span className="badge">Most popular</span>}
                  <h3>{p.name}</h3>
                  <div className="ptag">{p.tagline}</div>
                  <div className="price">{p.price}</div>
                  <div className="pnote">{p.note}</div>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}><Icon.check /> {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                    Book {p.name} <Icon.arrow />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 22, textAlign: 'center' }}>
              * Prices in NZD and may vary depending on the size and condition of your vehicle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Add-ons</span>
            <h2 className="section-title">Optional extras</h2>
          </Reveal>
          <div className="grid" style={{ marginTop: 32, gap: 14 }}>
            {ADDONS.map((a, i) => (
              <Reveal key={a.name} delay={i * 80}>
                <div className="addon-row">
                  <div>
                    <h4>{a.name}</h4>
                    <p>{a.desc}</p>
                  </div>
                  <span className="price">{a.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <h2>Not sure which package?</h2>
              <p>Tell us about your car and we’ll recommend the right detail — and give you an exact quote.</p>
              <Link to="/contact" className="btn btn-primary">Get a free quote <Icon.arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
