/* global React */

const SERVICES = [
  {
    num: '01 · Exterior',
    name: 'Ceramic Coat',
    price: 'FROM $1,299',
    desc: 'Multi-stage paint correction then a 7-year ceramic. Hydrophobic, UV-stable, unmatched gloss.',
    items: ['Pre-wash & decontamination', 'Machine paint correction', '9H ceramic application', '7-year warranty'],
  },
  {
    num: '02 · Interior',
    name: 'Deep Interior',
    price: 'FROM $349',
    desc: 'Steam, extraction, leather reconditioning. The cabin, returned to factory-fresh.',
    items: ['Hot-water extraction', 'Steam sanitization', 'Leather clean & condition', 'Trim & vent dressing'],
  },
  {
    num: '03 · Film',
    name: 'PPF Front End',
    price: 'FROM $2,499',
    desc: 'Self-healing paint protection film. Rock chips, sand, salt — the road stays on the road.',
    items: ['Hood, fenders, bumper', 'Mirrors & headlights', 'Self-healing top coat', '10-year warranty'],
  },
];

function Services({ onCTA }) {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <div className="lhs">
            <span className="eyebrow">Services · Packages</span>
            <h2>Three tiers,<br/>one standard.</h2>
          </div>
          <p>Whether you're protecting a new build or bringing a daily
             back from the brink, pick the package. We bring the rest.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service" key={s.name}>
              <span className="num">{s.num}</span>
              <h3>{s.name}</h3>
              <div className="price">{s.price}</div>
              <p>{s.desc}</p>
              <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <a href="#contact" className="btn btn-link"
                 onClick={(e) => { e.preventDefault(); onCTA && onCTA('contact'); }}>
                Get a Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
