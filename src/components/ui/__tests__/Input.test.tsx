import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from '../Input'

describe('Input Component', () => {
  it('renders input with label', () => {
    render(<Input label="Test Label" id="test-input" />)
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders input without label', () => {
    render(<Input id="test-input" />)
    
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<Input error="This is an error" id="test-input" />)
    
    expect(screen.getByText('This is an error')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('displays helper text', () => {
    render(<Input helperText="This is helper text" id="test-input" />)
    
    expect(screen.getByText('This is helper text')).toBeInTheDocument()
  })

  it('applies different sizes', () => {
    const { rerender } = render(<Input size="sm" id="test-input" />)
    expect(screen.getByRole('textbox')).toHaveClass('px-3', 'py-2', 'text-sm')
    
    rerender(<Input size="lg" id="test-input" />)
    expect(screen.getByRole('textbox')).toHaveClass('px-4', 'py-4', 'text-lg')
  })

  it('handles user input', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} id="test-input" />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test value' } })
    
    expect(handleChange).toHaveBeenCalled()
    expect(input).toHaveValue('test value')
  })

  it('can be disabled', () => {
    render(<Input disabled id="test-input" />)
    
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} id="test-input" />)
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
}) 