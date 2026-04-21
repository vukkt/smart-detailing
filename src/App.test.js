import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the hero tagline', () => {
  render(<App />)
  expect(screen.getByText(/precision auto detailing/i)).toBeInTheDocument()
})
