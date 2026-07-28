import styles from './Honeypot.module.scss'

interface HoneypotProps {
  value: string
  onChange: (value: string) => void
}

// Hidden from sighted users; bots that auto-fill every field will trip it.
function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div className={styles.honeypot} aria-hidden="true">
      <label htmlFor="company-website">Company Website</label>
      <input
        id="company-website"
        name="company-website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Honeypot
