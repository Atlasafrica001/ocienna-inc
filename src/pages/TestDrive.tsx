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
import { isRequired, isValidEmail, isValidPhone } from '../lib/validation'
import { featuredVehicles } from '../data/vehicles'
import { testDriveFaq } from '../data/faq'
import styles from './FormPage.module.scss'

interface TestDriveValues {
  name: string
  email: string
  phone: string
  vehicle: string
  preferredDate: string
  message: string
}

const initialValues: TestDriveValues = {
  name: '',
  email: '',
  phone: '',
  vehicle: '',
  preferredDate: '',
  message: '',
}

function validate(values: TestDriveValues) {
  const errors: Partial<Record<keyof TestDriveValues, string>> = {}
  if (!isRequired(values.name)) errors.name = 'Please enter your full name.'
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!isRequired(values.vehicle)) errors.vehicle = 'Let us know which vehicle you want to drive.'
  if (!isRequired(values.preferredDate)) errors.preferredDate = 'Please choose a preferred date.'
  return errors
}

function TestDrive() {
  const { values, errors, status, honeypot, setHoneypot, handleChange, handleSubmit } =
    useInquiryForm({ initialValues, validate, formType: 'Test Drive Booking' })

  return (
    <>
      <Seo
        title="Book a Test Drive"
        description="Schedule a test drive with Ocienns Inc. Pick your vehicle and preferred time, and our team will confirm your appointment."
      />
      <PageHeader
        title="Book a Test Drive"
        subtitle="Tell us which vehicle you'd like to experience and we'll set up a time that works for you."
      />
      <Container>
        <section className={styles.section}>
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
              label="Phone"
              name="phone"
              type="tel"
              required
              value={values.phone}
              error={errors.phone}
              onChange={(v) => handleChange('phone', v)}
            />
            <div className={styles.field}>
              <label htmlFor="vehicle">
                Vehicle of Interest<span aria-hidden="true"> *</span>
              </label>
              <select
                id="vehicle"
                value={values.vehicle}
                aria-invalid={Boolean(errors.vehicle)}
                onChange={(e) => handleChange('vehicle', e.target.value)}
              >
                <option value="">Select a vehicle</option>
                {featuredVehicles.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
              {errors.vehicle && (
                <p className={styles.error} role="alert">
                  {errors.vehicle}
                </p>
              )}
            </div>
            <FormField
              label="Preferred Date"
              name="preferredDate"
              type="date"
              required
              value={values.preferredDate}
              error={errors.preferredDate}
              onChange={(v) => handleChange('preferredDate', v)}
            />
            <FormField
              label="Additional Notes"
              name="message"
              as="textarea"
              value={values.message}
              onChange={(v) => handleChange('message', v)}
              placeholder="Anything else we should know?"
            />

            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Request Test Drive'}
            </Button>

            <FormStatusMessage
              status={status}
              successMessage="Thanks! Your test drive request has been sent, we'll be in touch shortly to confirm."
            />
          </form>
        </section>

        <section className={styles.faqSection}>
          <SectionHeading title="Test Drive Questions" align="center" />
          <div className={styles.faqWrap}>
            <FaqAccordion items={testDriveFaq} />
          </div>
        </section>
      </Container>
    </>
  )
}

export default TestDrive
