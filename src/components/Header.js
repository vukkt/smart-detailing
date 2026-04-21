import React from 'react'
import { Phone, Clock, MapPin } from './Icon'

const links = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header({ active = 'gallery', onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  function handleNav(id) {
    setMenuOpen(false)
    onNav && onNav(id)
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <div className="utility">
            <span>
              <span className="dot"></span>Open now · closes 6:00 PM
            </span>
            <span>
              <Clock width="12" height="12" /> Mon – Sat · 08:00 – 18:00
            </span>
          </div>
          <div className="utility">
            <span>
              <MapPin width="12" height="12" /> 24 Garage Lane, Chicago IL
            </span>
            <span>
              <Phone width="12" height="12" /> +1 (555) 284·0199
            </span>
          </div>
        </div>
        <div className="header-main">
          <a
            className="logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNav('home')
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/mark.svg`} alt="" />
            <span className="logo-text">
              Smart<em> Detailing</em>
            </span>
          </a>
          <nav className="nav">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(l.id)
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="btn btn-primary desktop-cta"
            onClick={(e) => {
              e.preventDefault()
              handleNav('contact')
            }}
          >
            Book a Detail
          </a>
          <button
            className={'hamburger' + (menuOpen ? ' open' : '')}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleNav(l.id)
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mobile-nav-cta"
            onClick={(e) => {
              e.preventDefault()
              handleNav('contact')
            }}
          >
            Book a Detail
          </a>
        </nav>
      )}
    </header>
  )
}
