import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const h = screen.getByText(/Visa Processing/i)
  expect(h).toBeInTheDocument()
})
