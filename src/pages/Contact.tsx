import Seo from '../components/Seo/Seo'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'
import FormField from '../components/FormField/FormField'
import Honeypot from '../components/Honeypot/Honeypot'
import FormStatusMessage from '../components/FormStatusMessage/FormStatusMessage'
import Button from '../components/Button/Button'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'
import { useInquiryForm } from '../hooks/useInquiryForm'
import { isRequired, isValidEmail } from '../lib/validation'
import { dealership } from '../data/dealership'
import { contactFaq } from '../data/faq'
import styles from './FormPage.module.scss'

interface ContactValues {
  name: string
  email: string
  message: string
}

const initialValues: ContactValues = { name: '', email: '', message: '' }

function validate(values: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {}
  if (!isRequired(values.name)) errors.name = 'Please enter your full name.'
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!isRequired(values.message)) errors.message = 'Please enter a message.'
  return errors
}

function Contact() {
  const { values, errors, status, honeypot, setHoneypot, handleChange, handleSubmit } =
    useInquiryForm({ initialValues, validate, formType: 'Contact Message' })

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Ociens Inc. Visit our dealership, call, email, or send us a message directly through our contact form."
      />
      <PageHeader
        title="Contact Us"
        subtitle="Have a question? Reach out and our team will get back to you promptly."
      />
      <Container>
        <section className={styles.section}>
          <div className={styles.contactGrid}>
            <div className={styles.contactDetails}>
              <h3>Address</h3>
              <p>{dealership.address}</p>

              <h3>Phone</h3>
              <p>
                <a href={`tel:${dealership.phone.replace(/[^\d+]/g, '')}`}>{dealership.phone}</a>
              </p>

              <h3>Email</h3>
              <p>
                <a href={`mailto:${dealership.email}`}>{dealership.email}</a>
              </p>

              <h3>Hours</h3>
              <ul>
                {dealership.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
              </ul>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <Honeypot value={honeypot} onChange={setHoneypot} />

              <FormField
                label="Full Name"
                name="name"
                required
                value={values.name}
                error={errors.name}
                onChange={(v) => handleChange('name', v)}
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                required
                value={values.email}
                error={errors.email}
                onChange={(v) => handleChange('email', v)}
              />
              <FormField
                label="Message"
                name="message"
                as="textarea"
                required
                value={values.message}
                error={errors.message}
                onChange={(v) => handleChange('message', v)}
              />

              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              <FormStatusMessage
                status={status}
                successMessage="Thanks for reaching out! We've received your message and will respond soon."
              />
            </form>
          </div>
        </section>

        <section className={styles.faqSection}>
          <SectionHeading title="Common Questions" align="center" />
          <div className={styles.faqWrap}>
            <FaqAccordion items={contactFaq} />
          </div>
        </section>
      </Container>
    </>
  )
}

export default Contact
