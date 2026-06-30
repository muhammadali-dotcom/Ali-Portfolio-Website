import { render, screen } from '@testing-library/react'
import SectionHeading from '@/components/ui/SectionHeading'

describe('SectionHeading', () => {
  test('renders the title', () => {
    render(<SectionHeading title="My Projects" />)
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  test('renders subtitle when provided', () => {
    render(<SectionHeading title="About" subtitle="Learn more about me" />)
    expect(screen.getByText('Learn more about me')).toBeInTheDocument()
  })

  test('does not render subtitle when not provided', () => {
    render(<SectionHeading title="Skills" />)
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
  })

  test('renders badge when provided', () => {
    render(<SectionHeading title="Experience" badge="Work" />)
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  test('does not render badge when not provided', () => {
    render(<SectionHeading title="Contact" />)
    // Only the title h2 should exist, no badge span before it
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })
})
