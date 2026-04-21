import React from 'react'
import { Instagram } from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="logo" href="#home">
              <img src={`${process.env.PUBLIC_URL}/mark.svg`} alt="" />
              <span className="logo-text">
                Smart<em> Detailing</em>
              </span>
            </a>
            <p className="bio">
              Concours-grade detailing for collectors, enthusiasts, and the cars
              that deserve a second look.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#services">Ceramic Coat</a>
              </li>
              <li>
                <a href="#services">Paint Correction</a>
              </li>
              <li>
                <a href="#services">Deep Interior</a>
              </li>
              <li>
                <a href="#services">PPF Front End</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li>
                <a href="#contact">About</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li>
                <a
                  href="https://instagram.com/smartdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    width="14"
                    height="14"
                    style={{ verticalAlign: '-2px', marginRight: 8 }}
                  />
                  @smartdetailing
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a href="#contact">Google Reviews</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SMART DETAILING LLC · ALL RIGHTS RESERVED</span>
          <span>CHICAGO · EST. 2014</span>
        </div>
      </div>
    </footer>
  )
}
