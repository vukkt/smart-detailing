/* global React */

function Hero({ onCTA }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <div className="eyebrow">Precision auto detailing · Est. 2014</div>
          <h1>Your vehicle<br/>deserves the<br/><em>best care.</em></h1>
          <p className="lede">
            Paint correction, ceramic coating, and concours-grade interior work —
            delivered by a team that treats every car like it's going to auction.
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary"
               onClick={(e) => { e.preventDefault(); onCTA && onCTA('contact'); }}>
              Book a Detail
            </a>
            <a href="#gallery" className="btn btn-ghost"
               onClick={(e) => { e.preventDefault(); onCTA && onCTA('gallery'); }}>
              See Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta">
        <b>4.96 ★ · 312 reviews</b>
        Trusted by collectors across the Midwest
      </div>
    </section>
  );
}

window.Hero = Hero;
