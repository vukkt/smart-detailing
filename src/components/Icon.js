import React from 'react'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.75',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const Mail = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const MapPin = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export const ZoomIn = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
  </svg>
)

export const Clock = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
