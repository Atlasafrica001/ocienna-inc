import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'
import { dealership } from '../data/dealership'
import { featuredVehicles } from '../data/vehicles'
import { testimonials, brands } from '../data/testimonials'
import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Ociens Inc. is a premium car dealership offering quality vehicles, flexible financing, and easy test drive booking."
      />

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1>{dealership.tagline}</h1>
            <p>
              Browse our featured inventory, book a test drive in minutes, and explore financing
              options built around your budget — all from one place.
            </p>
            <div className={styles.heroActions}>
              <Button to="/test-drive">Book a Test Drive</Button>
              <Button to="/financing" variant="ghost">
                Explore Financing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Featured Vehicles</h2>
          <div className={styles.vehicleGrid}>
            {featuredVehicles.map((vehicle) => (
              <article className={styles.vehicleCard} key={vehicle.id}>
                <div className={styles.vehicleImage} aria-hidden="true">
                  {vehicle.category}
                </div>
                <div className={styles.vehicleBody}>
                  <h3>{vehicle.name}</h3>
                  <p className={styles.vehiclePrice}>{vehicle.price}</p>
                  <p>{vehicle.description}</p>
                  <Button to="/test-drive" variant="secondary">
                    Test Drive This Vehicle
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.testimonialSection}>
        <Container>
          <h2>What Our Customers Say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <blockquote className={styles.testimonial} key={t.id}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  {t.author} &mdash; {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.brandsSection}>
        <Container>
          <p className={styles.brandsLabel}>Trusted by partners across the region</p>
          <ul className={styles.brandsList}>
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <h2>Ready to find your next vehicle?</h2>
            <p>Schedule a test drive today or reach out with any questions — we're here to help.</p>
            <div className={styles.heroActions}>
              <Button to="/test-drive">Book a Test Drive</Button>
              <Button to="/contact" variant="ghost">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
