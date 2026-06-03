import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Icon } from '../components/Icons'
import { BUSINESS, WHY, FAQS } from '../data/content'

function Faq({ q, a, open, onClick }) {
  return (
    <div className={`faq ${open ? 'open' : ''}`}>
      <button onClick={onClick}>
        {q}
        <span className="plus"><Icon.plus /></span>
      </button>
      <div className="a" style={{ maxHeight: open ? 240 : 0, paddingBottom: open ? 22 : 0, transition: 'all .3s ease' }}>
        {a}
      </div>
    </div>
  )
}

export default function About() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal><span className="eyebrow">About us</span></Reveal>
          <Reveal delay={80}><h1>Kerikeri’s detailing obsessives</h1></Reveal>
          <Reveal delay={140}>
            <p>{BUSINESS.blurb} We’re proudly local, and we love nothing more than handing back a car that looks better than the day it was bought.</p>
          </Reveal>
        </div>
      </header>

      <section className="block tight">
        <div className="wrap">
          <div className="grid cols-2">
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

      <section className="block tight">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Good questions, answered</h2>
          </Reveal>
          <div style={{ marginTop: 34 }}>
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <Faq {...f} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <h2>Let’s get your car sorted</h2>
              <p>Friendly advice, honest pricing, and a finish you’ll want to show off.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <Icon.arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
