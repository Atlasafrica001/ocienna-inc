import Seo from '../components/Seo/Seo'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'
import styles from './About.module.scss'

const values = [
  {
    title: 'Transparency',
    body: 'Upfront pricing and honest guidance — no hidden fees, no pressure tactics.',
  },
  {
    title: 'Community',
    body: 'We are locally owned and proud to serve individuals, families, and businesses in our region.',
  },
  {
    title: 'Long-Term Relationships',
    body: 'From your first visit to years down the road, we are here for service, questions, and your next vehicle.',
  },
]

function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Ociens Inc., a locally trusted car dealership committed to transparent pricing and honest service."
      />
      <PageHeader
        title="About Ociens Inc."
        subtitle="A dealership built on trust, transparency, and treating every customer like family."
      />
      <Container>
        <section className={styles.story}>
          <h2>Our Story</h2>
          <p>
            Ociens Inc. was founded with a simple goal: make car buying straightforward and
            stress-free. We know purchasing a vehicle is a big decision, so our team focuses on
            honest advice, fair pricing, and a no-pressure experience from the moment you walk in
            — or visit us online.
          </p>
          <p>
            Today, we serve individuals, families, professionals, and businesses looking for
            quality vehicles and financing options that actually fit their needs. Whether it's
            your first car or your company's next fleet vehicle, our team is here to help you
            drive away confident in your choice.
          </p>
        </section>

        <section className={styles.values}>
          <h2>What We Stand For</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div className={styles.valueCard} key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Come See Us</h2>
          <p>Ready to find your next vehicle? Book a test drive or get in touch with our team.</p>
          <div className={styles.ctaActions}>
            <Button to="/test-drive">Book a Test Drive</Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </section>
      </Container>
    </>
  )
}

export default About
