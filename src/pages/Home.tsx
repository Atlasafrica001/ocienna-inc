import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'
import Reveal from '../components/Reveal/Reveal'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import IconCard from '../components/IconCard/IconCard'
import StatBar from '../components/StatBar/StatBar'
import ProcessSteps from '../components/ProcessSteps/ProcessSteps'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'
import { dealership } from '../data/dealership'
import { featuredVehicles } from '../data/vehicles'
import { testimonials, brands } from '../data/testimonials'
import { differentiators } from '../data/differentiators'
import { dealershipStats, buyingSteps } from '../data/stats'
import { homeFaq } from '../data/faq'
import styles from './Home.module.scss'

function getInitials(name: string) {
  const words = name.match(/[A-Z][a-z]*/g) ?? [name]
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}

function Home() {
  const [featuredTestimonial, ...restTestimonials] = testimonials

  return (
    <>
      <Seo
        title="Home"
        description="Ocienna Inc. is a premium car dealership offering quality vehicles, flexible financing, and easy test drive booking."
      />

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroContent}>
              <h1>{dealership.tagline}</h1>
              <p>
                Browse our inventory, book a test drive in minutes, and explore financing built
                around your budget.
              </p>
              <div className={styles.heroActions}>
                <Button to="/test-drive">Book a Test Drive</Button>
                <Button to="/financing" variant="ghost">
                  Explore Financing
                </Button>
              </div>
            </Reveal>
            <Reveal className={styles.heroMedia} delay={120}>
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
                alt="Rows of vehicles for sale on the Ocienna Inc. dealership lot"
                width={960}
                height={699}
                loading="eager"
                fetchPriority="high"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={styles.statSection}>
        <Container>
          <StatBar stats={dealershipStats} />
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeading
            eyebrow="Inventory"
            title="Featured Vehicles"
            subtitle="A snapshot of what's on the lot this week, across nine body styles and price points."
          />
          <div className={styles.vehicleGrid}>
            {featuredVehicles.map((vehicle, index) => (
              <Reveal as="article" className={styles.vehicleCard} key={vehicle.id} delay={index * 60}>
                <div className={styles.vehicleImage}>
                  <img src={vehicle.image} alt={vehicle.name} width={640} height={480} loading="lazy" />
                  <span className={styles.vehicleCategory}>{vehicle.category}</span>
                </div>
                <div className={styles.vehicleBody}>
                  <h3>{vehicle.name}</h3>
                  <p className={styles.vehiclePrice}>{vehicle.price}</p>
                  <p>{vehicle.description}</p>
                  <ul className={styles.vehicleSpecs}>
                    <li>{vehicle.fuelType}</li>
                    <li>{vehicle.seats}</li>
                    <li>{vehicle.transmission}</li>
                  </ul>
                  <Button to="/test-drive" variant="secondary">
                    Test Drive This Vehicle
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.whySection}>
        <Container>
          <SectionHeading
            title="Why Buyers Choose Ocienna Inc."
            subtitle="Fifteen years of the same four commitments, whether it's your first car or your company's fifth fleet vehicle."
          />
          <div className={styles.whyGrid}>
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <IconCard
                  icon={item.icon}
                  title={item.title}
                  body={item.body}
                  tone={index % 2 === 1 ? 'dark' : 'light'}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.processSection}>
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="How Buying Works"
            subtitle="Four steps from browsing online to driving off the lot, most of it doable before you ever visit."
            tone="dark"
          />
          <ProcessSteps steps={buyingSteps} tone="dark" />
        </Container>
      </section>

      <section className={styles.testimonialSection}>
        <Container>
          <SectionHeading title="What Our Customers Say" />
          <div className={styles.testimonialGrid}>
            {featuredTestimonial && (
              <blockquote className={`${styles.testimonial} ${styles.testimonialFeatured}`}>
                <p>&ldquo;{featuredTestimonial.quote}&rdquo;</p>
                <footer>
                  {featuredTestimonial.author} · {featuredTestimonial.location}
                </footer>
              </blockquote>
            )}
            {restTestimonials.map((t) => (
              <blockquote className={styles.testimonial} key={t.id}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  {t.author} · {t.location}
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
              <li key={brand} className={styles.brandMark}>
                <svg viewBox="0 0 64 64" width="52" height="52" role="img" aria-label={brand}>
                  <circle cx="32" cy="32" r="30" fill="none" strokeWidth="1.5" />
                  <text x="32" y="39" textAnchor="middle" fontSize="19">
                    {getInitials(brand)}
                  </text>
                </svg>
                <span className={styles.brandName}>{brand}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container>
          <SectionHeading title="Common Questions" align="center" />
          <div className={styles.faqWrap}>
            <FaqAccordion items={homeFaq} />
          </div>
        </Container>
      </section>

      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <h2>Ready to find your next vehicle?</h2>
            <p>Schedule a test drive today or reach out with any questions. We're here to help.</p>
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
