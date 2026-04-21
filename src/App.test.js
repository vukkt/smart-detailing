import { render, screen } from '@testing-library/react'
import App from './App'

test('renders tagline', () => {
  render(<App />)
  const tagline = screen.getByText(/your vehicle deserves the best care/i)
  expect(tagline).toBeInTheDocument()
})
