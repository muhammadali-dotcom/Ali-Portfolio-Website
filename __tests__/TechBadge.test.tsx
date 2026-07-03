import { render, screen } from '@testing-library/react'
import TechBadge from '@/components/ui/TechBadge'

describe('TechBadge', () => {
  test('renders the tech name', () => {
    render(<TechBadge name="React" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  test('renders a different tech name', () => {
    render(<TechBadge name="TypeScript" />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  test('applies custom className', () => {
    render(<TechBadge name="Next.js" className="custom-class" />)
    const badge = screen.getByText('Next.js')
    expect(badge).toHaveClass('custom-class')
  })
})
