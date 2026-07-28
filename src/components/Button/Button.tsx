import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
}

function Button({ children, to, href, variant = 'primary', type = 'button', disabled }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
