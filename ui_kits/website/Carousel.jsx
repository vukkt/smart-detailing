/* global React, SDIcons */

const SLIDES = [
  { id: 1, img: '../../assets/gallery/car1.jpg', label: 'Century GRMN', tag: 'Ceramic · 9H' },
  { id: 2, img: '../../assets/gallery/car2.jpg', label: 'Corvette Z06',  tag: 'Paint Correction' },
  { id: 3, img: '../../assets/gallery/car3.jpg', label: 'BMW M550i',     tag: 'Full Detail' },
  { id: 4, img: '../../assets/gallery/car1.jpg', label: 'Century GRMN',  tag: 'Interior · Deep' },
  { id: 5, img: '../../assets/gallery/car2.jpg', label: 'Corvette Z06',  tag: 'PPF Front End' },
  { id: 6, img: '../../assets/gallery/car3.jpg', label: 'BMW M550i',     tag: 'Hand Wash' },
];

function CarouselSlide({ slide, index }) {
  const { ZoomIn } = SDIcons;
  const ref = React.useRef(null);
  const imgRef = React.useRef(null);
  const [hovering, setHovering] = React.useState(false);

  function onMove(e) {
    if (!imgRef.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    imgRef.current.style.transformOrigin = `${px}% ${py}%`;
  }

  return (
    <div
      ref={ref}
      className={'carousel-slide' + (hovering ? ' magnify' : '')}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={onMove}
    >
      <div
        ref={imgRef}
        className="zoom-img"
        style={{ backgroundImage: `url(${slide.img})` }}
      />
      <div className="zoom-hint"><ZoomIn width="11" height="11" /> Magnify</div>
      <div className="caption">
        <div className="label">{slide.label}</div>
        <div className="num">{String(index + 1).padStart(2, '0')} · {slide.tag}</div>
      </div>
    </div>
  );
}

function Carousel() {
  const { ArrowLeft, ArrowRight } = SDIcons;
  const trackRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const total = SLIDES.length;

  function scrollTo(newIndex) {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(total - 1, newIndex));
    const track = trackRef.current;
    const child = track.children[clamped];
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    setIndex(clamped);
  }

  function onScroll() {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const slideW = track.children[0]?.offsetWidth || 1;
    const idx = Math.round(track.scrollLeft / (slideW + 18));
    setIndex(Math.max(0, Math.min(total - 1, idx)));
  }

  const progress = ((index + 1) / total) * 100;

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="lhs">
            <span className="eyebrow">Portfolio · The Work</span>
            <h2>Every car,<br/>a signature finish.</h2>
          </div>
          <p>Hover any frame to inspect the paint. A sample of recent jobs —
             from concours prep to daily-driver revivals.</p>
        </div>

        <div className="carousel">
          <div className="carousel-track" ref={trackRef} onScroll={onScroll}>
            {SLIDES.map((s, i) => (
              <CarouselSlide key={s.id + '-' + i} slide={s} index={i} />
            ))}
          </div>
          <div className="carousel-controls">
            <div className="carousel-count">
              <b>{String(index + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
            </div>
            <div className="carousel-progress">
              <div className="carousel-progress-bar" style={{ width: progress + '%' }} />
            </div>
            <div className="carousel-arrows">
              <button className="arrow-btn" onClick={() => scrollTo(index - 1)} disabled={index === 0} aria-label="Previous">
                <ArrowLeft />
              </button>
              <button className="arrow-btn" onClick={() => scrollTo(index + 1)} disabled={index === total - 1} aria-label="Next">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Carousel = Carousel;
