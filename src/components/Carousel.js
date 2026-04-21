import React from 'react'
import { ArrowLeft, ArrowRight } from './Icon'

const SLIDES = [
  { id: 1, img: 'car1.jpg', label: 'Century GRMN', tag: 'Ceramic · 9H' },
  { id: 2, img: 'car2.jpg', label: 'Corvette Z06', tag: 'Paint Correction' },
  { id: 3, img: 'car3.jpg', label: 'BMW M550i', tag: 'Full Detail' },
  { id: 4, img: 'car1.jpg', label: 'Century GRMN', tag: 'Interior · Deep' },
  { id: 5, img: 'car2.jpg', label: 'Corvette Z06', tag: 'PPF Front End' },
  { id: 6, img: 'car3.jpg', label: 'BMW M550i', tag: 'Hand Wash' },
]

function CarouselSlide({ slide, index }) {
  return (
    <div className="carousel-slide">
      <div
        className="zoom-img"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${slide.img})`,
        }}
      />
      <div className="caption">
        <div className="label">{slide.label}</div>
        <div className="num">
          {String(index + 1).padStart(2, '0')} · {slide.tag}
        </div>
      </div>
    </div>
  )
}

export default function Carousel() {
  const trackRef = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const total = SLIDES.length

  function scrollTo(newIndex) {
    if (!trackRef.current) return
    const clamped = Math.max(0, Math.min(total - 1, newIndex))
    const track = trackRef.current
    const child = track.children[clamped]
    if (child) {
      track.scrollTo({
        left: child.offsetLeft - track.offsetLeft,
        behavior: 'smooth',
      })
    }
    setIndex(clamped)
  }

  function onScroll() {
    if (!trackRef.current) return
    const track = trackRef.current
    const slideW = track.children[0]?.offsetWidth || 1
    const idx = Math.round(track.scrollLeft / (slideW + 18))
    setIndex(Math.max(0, Math.min(total - 1, idx)))
  }

  const progress = ((index + 1) / total) * 100

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="lhs">
            <span className="eyebrow">Portfolio · The Work</span>
            <h2>
              Every car,
              <br />a signature finish.
            </h2>
          </div>
          <p>
            Hover any frame to inspect the paint. A sample of recent jobs — from
            concours prep to daily-driver revivals.
          </p>
        </div>

        <div className="carousel">
          <div className="carousel-track" ref={trackRef} onScroll={onScroll}>
            {SLIDES.map((s, i) => (
              <CarouselSlide key={s.id + '-' + i} slide={s} index={i} />
            ))}
          </div>
          <div className="carousel-controls">
            <div className="carousel-count">
              <b>{String(index + 1).padStart(2, '0')}</b> /{' '}
              {String(total).padStart(2, '0')}
            </div>
            <div className="carousel-progress">
              <div
                className="carousel-progress-bar"
                style={{ width: progress + '%' }}
              />
            </div>
            <div className="carousel-arrows">
              <button
                className="arrow-btn"
                onClick={() => scrollTo(index - 1)}
                disabled={index === 0}
                aria-label="Previous"
              >
                <ArrowLeft />
              </button>
              <button
                className="arrow-btn"
                onClick={() => scrollTo(index + 1)}
                disabled={index === total - 1}
                aria-label="Next"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
