/* global React, SDIcons */

function Footer() {
  const { Instagram } = SDIcons;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="logo" href="#">
              <img src="../../assets/mark.svg" alt="" />
              <span className="logo-text">Smart<em> Detailing</em></span>
            </a>
            <p className="bio">
              Concours-grade detailing for collectors, enthusiasts,
              and the cars that deserve a second look.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#">Ceramic Coat</a></li>
              <li><a href="#">Paint Correction</a></li>
              <li><a href="#">Deep Interior</a></li>
              <li><a href="#">PPF Front End</a></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <ul>
              <li><a href="#"><Instagram width="14" height="14" style={{ verticalAlign: '-2px', marginRight: 8 }} />@smartdetailing</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Google Reviews</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SMART DETAILING LLC · ALL RIGHTS RESERVED</span>
          <span>CHICAGO · EST. 2014</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
