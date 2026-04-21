/* global React, ReactDOM, Header, Hero, Carousel, Services, Stats, Contact, Footer */

function App() {
  const [active, setActive] = React.useState('gallery');

  function handleNav(id) {
    setActive(id);
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
