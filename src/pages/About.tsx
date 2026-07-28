import Seo from '../components/Seo/Seo'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'
import Button from '../components/Button/Button'
import Reveal from '../components/Reveal/Reveal'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import IconCard from '../components/IconCard/IconCard'
import ProcessSteps from '../components/ProcessSteps/ProcessSteps'
import type { IconName } from '../components/Icon/Icon'
import { milestones } from '../data/stats'
import styles from './About.module.scss'

const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'document',
    title: 'Transparency',
    body: 'Upfront pricing and honest guidance. No hidden fees, no pressure tactics.',
  },
  {
    icon: 'shield',
    title: 'Vehicles you can trust',
    body: 'Every vehicle passes a multi-point inspection before it reaches the lot.',
  },
  {
    icon: 'users',
    title: 'Community',
    body: 'Locally owned and proud to serve individuals, families, and businesses in our region.',
  },
  {
    icon: 'handshake',
    title: 'Long-term relationships',
    body: 'From your first visit to years down the road, we are here for service, questions, and your next vehicle.',
  },
]

function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Ocean Inc., a locally trusted car dealership committed to transparent pricing and honest service."
      />
      <PageHeader
        title="About Ocean Inc."
        subtitle="A dealership built on trust, transparency, and treating every customer like family."
      />
      <Container>
        <section className={styles.story}>
          <div className={styles.storyGrid}>
            <Reveal>
              <h2>Our Story</h2>
              <p>
                Ocean Inc. was founded with a simple goal: make car buying straightforward and
                stress-free. We know purchasing a vehicle is a big decision, so our team focuses on
                honest advice, fair pricing, and a no-pressure experience, whether you walk in or
                visit us online.
              </p>
              <p>
                Today, we serve individuals, families, professionals, and businesses looking for
                quality vehicles and financing options that actually fit their needs. Whether it's
                your first car or your company's next fleet vehicle, our team is here to help you
                drive away confident in your choice.
              </p>
            </Reveal>
            <Reveal className={styles.storyMedia} delay={120}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Used_car_lot_-_geograph.org.uk_-_1036517.jpg"
                alt="Rows of vehicles parked on a dealership lot"
                width={640}
                height={480}
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        <section className={styles.values}>
          <SectionHeading title="What We Stand For" />
          <div className={styles.valuesGrid}>
            {values.map((v, index) => (
              <Reveal key={v.title} delay={index * 60}>
                <IconCard
                  icon={v.icon}
                  title={v.title}
                  body={v.body}
                  tone={index % 2 === 1 ? 'dark' : 'light'}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.milestones}>
          <SectionHeading eyebrow="Since 2011" title="Our Journey" />
          <ProcessSteps steps={milestones} />
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
