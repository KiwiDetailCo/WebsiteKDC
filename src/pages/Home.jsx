import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import { Icon } from '../components/Icons'
import { BUSINESS, SERVICES, WHY, PAIRS } from '../data/content'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow"><Icon.sparkle /> {BUSINESS.location} · NZ</span>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              Your car,<br /><span className="grad">showroom new.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p>{BUSINESS.blurb}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Book a detail <Icon.arrow /></Link>
              <Link to="/pricing" className="btn btn-ghost">View pricing</Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-stats">
              <div className="stat"><div className="n">100%</div><div className="l">Hand-finished</div></div>
              <div className="stat"><div className="n">Inside&nbsp;+&nbsp;Out</div><div className="l">Full detailing</div></div>
              <div className="stat"><div className="n">Kerikeri</div><div className="l">Local & trusted</div></div>
            </div>
          </Reveal>
        </div>
        <div className="scroll-hint">
          <div className="mouse" />
          Scroll
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="block">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">Detailing done properly</h2>
            <p className="section-sub">
              From a quick refresh to a full paint correction, every job gets the same meticulous, hand-finished care.
            </p>
          </Reveal>
          <div className="grid cols-4" style={{ marginTop: 44 }}>
            {SERVICES.map((s, i) => {
              const I = Icon[s.icon]
              return (
                <Reveal key={s.id} delay={i * 90}>
                  <div className="card">
                    <div className="ico">{I && <I />}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={120}>
            <div style={{ marginTop: 32 }}>
              <Link to="/services" className="btn btn-ghost">All services <Icon.arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BEFORE / AFTER FEATURE */}
      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">See the difference</span>
            <h2 className="section-title">See the transformation</h2>
            <p className="section-sub">Real cars, real results from around the Bay of Islands — before and after, side by side.</p>
          </Reveal>
          <div className="grid" style={{ marginTop: 40, gap: 30 }}>
            {PAIRS.slice(0, 2).map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <BeforeAfter {...p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ marginTop: 30 }}>
              <Link to="/gallery" className="btn btn-ghost">View full gallery <Icon.arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="block">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why Kiwi Detail Co.</span>
            <h2 className="section-title">Local detailers who care</h2>
          </Reveal>
          <div className="grid cols-2" style={{ marginTop: 40 }}>
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="card" style={{ display: 'flex', gap: 16 }}>
                  <div className="ico" style={{ marginBottom: 0 }}><Icon.check /></div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <h2>Ready to make your car shine?</h2>
              <p>Send us a quick message and we’ll get you booked in. Inside, outside, or the full works.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get a free quote <Icon.arrow /></Link>
                <a href={BUSINESS.phoneHref} className="btn btn-ghost"><Icon.phone /> {BUSINESS.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
