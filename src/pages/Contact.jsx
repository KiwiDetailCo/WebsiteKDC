import Reveal from '../components/Reveal'
import { Icon } from '../components/Icons'
import { BUSINESS } from '../data/content'

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Reveal><span className="eyebrow">Get in touch</span></Reveal>
          <Reveal delay={80}><h1>Book your detail</h1></Reveal>
          <Reveal delay={140}>
            <p>Give us a call or send a quick message with your car and what you’re after, and we’ll get back to you with a price and a time.</p>
          </Reveal>
        </div>
      </header>

      <section className="block tight">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <div className="card">
                <h3 style={{ marginBottom: 6 }}>Contact details</h3>
                <a href={BUSINESS.phoneHref} className="contact-line">
                  <span className="ci"><Icon.phone /></span>
                  <span><span className="cl">Phone</span><span className="cv">{BUSINESS.phone}</span></span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="contact-line">
                  <span className="ci"><Icon.mail /></span>
                  <span><span className="cl">Email</span><span className="cv">{BUSINESS.email}</span></span>
                </a>
                <div className="contact-line">
                  <span className="ci"><Icon.pin /></span>
                  <span><span className="cl">Based in</span><span className="cv">Kerikeri, Bay of Islands</span></span>
                </div>
                <div className="contact-line" style={{ borderBottom: 'none' }}>
                  <span className="ci"><Icon.sparkle /></span>
                  <span><span className="cl">Hours</span><span className="cv">Mon to Sat, by appointment</span></span>
                </div>

                <div style={{ marginTop: 22 }}>
                  <h5 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', margin: '0 0 12px' }}>Follow our work</h5>
                  <div className="socials">
                    <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon.fb /></a>
                    <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.ig /></a>
                    <a href={`mailto:${BUSINESS.email}`} aria-label="Email"><Icon.mail /></a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
                <h3>Ready to book?</h3>
                <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                  The quickest way to lock in a detail is a call or text. Let us know your vehicle and whether you’d like the interior, exterior, or the full works.
                </p>
                <a href={BUSINESS.phoneHref} className="btn btn-primary" style={{ justifyContent: 'center' }}>
                  <Icon.phone /> Call {BUSINESS.phone}
                </a>
                <a href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent('Detailing enquiry')}`} className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                  <Icon.mail /> Email us
                </a>
                <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                  <Icon.ig /> Message on Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
