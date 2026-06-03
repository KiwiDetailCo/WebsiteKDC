import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Icon } from '../components/Icons'
import { SERVICES, ADDONS } from '../data/content'

const DETAILS = {
  exterior: ['Pre-rinse & snow-foam', 'Two-bucket hand wash', 'Wheels, arches & tyres', 'Dry & paint protection'],
  interior: ['Full vacuum & blow-out', 'Seats & carpets deep clean', 'Dashboard & trim conditioning', 'Glass cleaned inside'],
  correction: ['Decontamination wash', 'Clay & iron removal', '1-step machine polish', 'Gloss-restoring finish'],
  wheels: ['Barrel & face cleaning', 'Brake dust removal', 'Tyre dressing', 'Optional wheel sealant'],
}

export default function Services() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal><span className="eyebrow">Services</span></Reveal>
          <Reveal delay={80}><h1>Everything your car needs</h1></Reveal>
          <Reveal delay={140}>
            <p>We tailor every detail to your vehicle and budget. Mix and match, or go for the full works — here’s what we offer.</p>
          </Reveal>
        </div>
      </header>

      <section className="block tight">
        <div className="wrap">
          <div className="grid cols-2">
            {SERVICES.map((s, i) => {
              const I = Icon[s.icon]
              return (
                <Reveal key={s.id} delay={i * 90}>
                  <div className="card">
                    <div className="ico">{I && <I />}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'grid', gap: 10 }}>
                      {DETAILS[s.id].map((d) => (
                        <li key={d} style={{ display: 'flex', gap: 10, color: '#d7d7dd', fontSize: 15 }}>
                          <span style={{ color: 'var(--purple-bright)' }}><Icon.check /></span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Add-ons</span>
            <h2 className="section-title">Boost any package</h2>
            <p className="section-sub">Optional extras to take your detail to the next level.</p>
          </Reveal>
          <div className="grid" style={{ marginTop: 36, gap: 14 }}>
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
          <Reveal delay={120}>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/pricing" className="btn btn-primary">See packages & prices <Icon.arrow /></Link>
              <Link to="/contact" className="btn btn-ghost">Book a detail</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
