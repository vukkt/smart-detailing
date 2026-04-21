/* global React, SDIcons */

function Header({ active = 'gallery', onNav }) {
  const { Phone, Clock, MapPin } = SDIcons;
  const links = [
    { id: 'gallery',  label: 'Gallery' },
    { id: 'services', label: 'Services' },
    { id: 'about',    label: 'About' },
    { id: 'contact',  label: 'Contact' },
  ];
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <div className="utility">
            <span><span className="dot"></span>Open now · closes 6:00 PM</span>
            <span><Clock width="12" height="12" /> Mon – Sat · 08:00 – 18:00</span>
          </div>
          <div className="utility">
            <span><MapPin width="12" height="12" /> 24 Garage Lane, Chicago IL</span>
            <span><Phone width="12" height="12" /> +1 (555) 284·0199</span>
          </div>
        </div>
        <div className="header-main">
          <a className="logo" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}>
            <img src="../../assets/mark.svg" alt="" />
            <span className="logo-text">Smart<em> Detailing</em></span>
          </a>
          <nav className="nav">
            {links.map((l) => (
              <a key={l.id}
                 href={`#${l.id}`}
                 className={active === l.id ? 'active' : ''}
                 onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact"
             className="btn btn-primary"
             onClick={(e) => { e.preventDefault(); onNav && onNav('contact'); }}>
            Book a Detail
          </a>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
