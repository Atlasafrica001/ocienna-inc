import styles from './FormField.module.scss'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  as?: 'input' | 'textarea'
  placeholder?: string
}

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  as = 'input',
  placeholder,
}: FormFieldProps) {
  const id = `field-${name}`
  const errorId = `${id}-error`

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required && (
          <span aria-hidden="true" className={styles.required}>
            {' '}
            *
          </span>
        )}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          rows={5}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
