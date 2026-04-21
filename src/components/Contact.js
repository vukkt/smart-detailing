import React from 'react'
import { Phone, Mail, MapPin } from './Icon'

export default function Contact() {
  const [status, setStatus] = React.useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    const res = await fetch('https://formspree.io/f/mrblpkrb', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    setStatus(res.ok ? 'sent' : 'idle')
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="lhs">
            <span className="eyebrow">Contact · Get a Quote</span>
            <h2>
              Tell us about
              <br />
              your car.
            </h2>
          </div>
          <p>
            We respond inside of 4 business hours. Detailed quotes are
            no-obligation and usually land same-day.
          </p>
        </div>

        <div className="contact-wrap">
          <aside className="contact-info">
            <div className="block">
              <span className="label">
                <Phone
                  width="12"
                  height="12"
                  style={{ verticalAlign: '-2px', marginRight: 6 }}
                />
                Call
              </span>
              <div className="val">(555) 284·0199</div>
              <div className="sub">Mon – Sat · 08:00 – 18:00 CT</div>
            </div>
            <div className="block">
              <span className="label">
                <Mail
                  width="12"
                  height="12"
                  style={{ verticalAlign: '-2px', marginRight: 6 }}
                />
                Email
              </span>
              <div className="val" style={{ fontSize: 22 }}>
                hello@smartdetailing.co
              </div>
              <div className="sub">We reply within 4 business hours.</div>
            </div>
            <div className="block">
              <span className="label">
                <MapPin
                  width="12"
                  height="12"
                  style={{ verticalAlign: '-2px', marginRight: 6 }}
                />
                Studio
              </span>
              <div className="val">24 Garage Lane</div>
              <div className="sub">Chicago, IL 60642 · By appointment only</div>
            </div>
          </aside>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              <span className="lab">Full Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Alex Morrison"
              />
            </label>
            <label>
              <span className="lab">Phone</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(555) 000-0000"
              />
            </label>
            <label className="full">
              <span className="lab">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@domain.com"
              />
            </label>
            <label>
              <span className="lab">Vehicle</span>
              <input type="text" name="vehicle" placeholder="2023 Audi RS6" />
            </label>
            <label>
              <span className="lab">Service</span>
              <select name="service" defaultValue="ceramic">
                <option value="ceramic">Ceramic Coat</option>
                <option value="interior">Deep Interior</option>
                <option value="ppf">PPF Front End</option>
                <option value="custom">Custom / Multiple</option>
              </select>
            </label>
            <label className="full">
              <span className="lab">Tell us about the job</span>
              <textarea
                name="message"
                placeholder="Year, model, color, current condition, what you'd like done."
              />
            </label>
            <div className="submit-row">
              <span className="agree">
                We&apos;ll never share your info. Reply within 4 hours.
              </span>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                {status === 'idle' && 'Send Request'}
                {status === 'sending' && 'Sending\u2026'}
                {status === 'sent' &&
                  '\u2713\u2002Received \u2014 we\u2019ll be in touch'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
