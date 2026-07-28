import type { FormStatus } from '../../hooks/useInquiryForm'
import styles from './FormStatusMessage.module.scss'

interface FormStatusMessageProps {
  status: FormStatus
  successMessage: string
}

function FormStatusMessage({ status, successMessage }: FormStatusMessageProps) {
  if (status === 'success') {
    return (
      <p className={styles.success} role="status">
        {successMessage}
      </p>
    )
  }

  if (status === 'error') {
    return (
      <p className={styles.error} role="alert">
        Something went wrong sending your message. Please try again, or call us directly.
      </p>
    )
  }

  return null
}

export default FormStatusMessage
