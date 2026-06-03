import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icons'
import { PAIRS, SHOWCASE } from '../data/content'

export default function Gallery() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal><span className="eyebrow">Gallery</span></Reveal>
          <Reveal delay={80}><h1>Before & after</h1></Reveal>
          <Reveal delay={140}>
            <p>A look at real details from around Kerikeri & the Bay of Islands — before on the left, after on the right. (Number plates blurred for privacy.)</p>
          </Reveal>
        </div>
      </header>

      <section className="block tight">
        <div className="wrap">
          <div className="grid" style={{ gap: 30 }}>
            {PAIRS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <BeforeAfter {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The finished look</span>
            <h2 className="section-title">Detailing highlights</h2>
          </Reveal>
          <div className="masonry" style={{ marginTop: 36 }}>
            {SHOWCASE.map((s, i) => (
              <Reveal key={s.src} delay={(i % 3) * 80} className="shot-wrap">
                <div className="shot">
                  <img src={s.src} alt={s.label} loading="lazy" />
                  <div className="cap">{s.label}</div>
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
              <h2>Want your car to look like this?</h2>
              <p>Book your detail today and join our happy Bay of Islands customers.</p>
              <Link to="/contact" className="btn btn-primary">Book now <Icon.arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
