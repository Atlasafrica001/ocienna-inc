import { useState } from 'react'
import type { FormEvent } from 'react'
import { sendInquiry } from '../lib/emailjs'

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'

interface UseInquiryFormOptions<T> {
  initialValues: T
  validate: (values: T) => Partial<Record<keyof T, string>>
  formType: string
}

export function useInquiryForm<T extends Record<keyof T, string>>({
  initialValues,
  validate,
  formType,
}: UseInquiryFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [honeypot, setHoneypot] = useState('')

  function handleChange(field: keyof T, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    // Honeypot filled in => likely a bot. Pretend success without sending.
    if (honeypot) {
      setStatus('success')
      return
    }

    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    try {
      await sendInquiry({ ...(values as unknown as Record<string, string>), form_type: formType })
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  return { values, errors, status, honeypot, setHoneypot, handleChange, handleSubmit }
}
