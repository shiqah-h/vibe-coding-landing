import { validateName, validateEmail, sanitizeFormData, validateFormData } from '../validation'

describe('Validation Functions', () => {
  describe('validateName', () => {
    it('should validate a valid name', () => {
      const result = validateName('John Doe')
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it('should reject empty name', () => {
      const result = validateName('')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name is required')
    })

    it('should reject whitespace-only name', () => {
      const result = validateName('   ')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name is required')
    })

    it('should reject name that is too short', () => {
      const result = validateName('A')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name must be at least 2 characters long')
    })

    it('should reject name with special characters', () => {
      const result = validateName('John@Doe')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Name can only contain letters, spaces, and hyphens')
    })

    it('should accept name with hyphens', () => {
      const result = validateName('Jean-Pierre')
      expect(result.isValid).toBe(true)
    })
  })

  describe('validateEmail', () => {
    it('should validate a valid email', () => {
      const result = validateEmail('test@example.com')
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it('should reject empty email', () => {
      const result = validateEmail('')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Email is required')
    })

    it('should reject invalid email format', () => {
      const result = validateEmail('invalid-email')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a valid email address')
    })

    it('should reject email without domain', () => {
      const result = validateEmail('test@')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a valid email address')
    })

    it('should accept email with subdomain', () => {
      const result = validateEmail('test@sub.example.com')
      expect(result.isValid).toBe(true)
    })
  })

  describe('sanitizeFormData', () => {
    it('should sanitize form data correctly', () => {
      const input = {
        name: '  John Doe  ',
        email: '  TEST@EXAMPLE.COM  ',
        newsletter_consent: true
      }

      const result = sanitizeFormData(input)

      expect(result).toEqual({
        name: 'John Doe',
        email: 'test@example.com',
        newsletter_consent: true
      })
    })

    it('should handle undefined newsletter consent', () => {
      const input = {
        name: 'John Doe',
        email: 'test@example.com',
        newsletter_consent: undefined
      }

      const result = sanitizeFormData(input)

      expect(result.newsletter_consent).toBe(false)
    })
  })

  describe('validateFormData', () => {
    it('should validate complete form data', () => {
      const input = {
        name: 'John Doe',
        email: 'test@example.com',
        newsletter_consent: true
      }

      const result = validateFormData(input)

      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual({})
    })

    it('should return errors for invalid data', () => {
      const input = {
        name: '',
        email: 'invalid-email',
        newsletter_consent: false
      }

      const result = validateFormData(input)

      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveProperty('name')
      expect(result.errors).toHaveProperty('email')
    })
  })
}) 