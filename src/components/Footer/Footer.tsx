import { Link } from 'react-router-dom'
import { dealership, navLinks } from '../../data/dealership'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>{dealership.name}</p>
          <p>{dealership.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>{dealership.address}</li>
            <li>
              <a href={`tel:${dealership.phone.replace(/[^\d+]/g, '')}`}>{dealership.phone}</a>
            </li>
            <li>
              <a href={`mailto:${dealership.email}`}>{dealership.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Hours</h3>
          <ul>
            {dealership.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} {dealership.name} All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
