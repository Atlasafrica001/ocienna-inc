import type { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

function SectionHeading({ eyebrow, title, subtitle, align = 'left', tone = 'light' }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${align === 'center' ? styles.center : ''} ${tone === 'dark' ? styles.dark : ''}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
