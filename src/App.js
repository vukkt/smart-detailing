import React from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Carousel from './components/Carousel'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [active, setActive] = React.useState('gallery')

  function handleNav(id) {
    setActive(id)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Header active={active} onNav={handleNav} />
      <main>
        <Hero onCTA={handleNav} />
        <Stats />
        <Carousel />
        <Services onCTA={handleNav} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
