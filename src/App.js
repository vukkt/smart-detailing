import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Gallery } from './components/Gallery'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Your vehicle deserves the best care.</p>
        <a className="App-link" href="#contact" rel="noopener noreferrer">
          Get a Quote Today!
        </a>
      </header>

      <Gallery />

      <section id="contact">
        <h2>Get in Touch</h2>
        <ContactForm />
      </section>
    </div>
  )
}

export default App
