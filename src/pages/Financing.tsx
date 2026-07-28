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
import { financingFaq } from '../data/faq'
import styles from './FormPage.module.scss'

interface FinancingValues {
  name: string
  email: string
  phone: string
  vehicleInterest: string
  loanAmount: string
  message: string
}

const initialValues: FinancingValues = {
  name: '',
  email: '',
  phone: '',
  vehicleInterest: '',
  loanAmount: '',
  message: '',
}

function validate(values: FinancingValues) {
  const errors: Partial<Record<keyof FinancingValues, string>> = {}
  if (!isRequired(values.name)) errors.name = 'Please enter your full name.'
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number.'
  return errors
}

const financingHighlights = [
  {
    title: 'Competitive Rates',
    body: 'We work with a network of lenders to find terms that fit your budget.',
  },
  {
    title: 'All Credit Backgrounds',
    body: 'Whether your credit is excellent or you are rebuilding, we can help find a path forward.',
  },
  {
    title: 'Fast Pre-Approval',
    body: 'Submit an inquiry and get a response from our finance team, typically within one business day.',
  },
]

function Financing() {
  const { values, errors, status, honeypot, setHoneypot, handleChange, handleSubmit } =
    useInquiryForm({ initialValues, validate, formType: 'Financing Inquiry' })

  return (
    <>
      <Seo
        title="Car Financing"
        description="Explore flexible car financing options at Ocean Inc. Submit an inquiry and our finance team will help find the right plan for you."
      />
      <PageHeader
        title="Car Financing"
        subtitle="Flexible financing options designed to fit your budget and get you into the vehicle you want."
      />
      <Container>
        <section className={styles.section}>
          <div className={styles.infoGrid}>
            {financingHighlights.map((item) => (
              <div className={styles.infoCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <h2>Request a Financing Quote</h2>
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
            <FormField
              label="Vehicle of Interest"
              name="vehicleInterest"
              value={values.vehicleInterest}
              onChange={(v) => handleChange('vehicleInterest', v)}
              placeholder="e.g. Summit XL SUV"
            />
            <FormField
              label="Estimated Loan Amount"
              name="loanAmount"
              value={values.loanAmount}
              onChange={(v) => handleChange('loanAmount', v)}
              placeholder="e.g. $25,000"
            />
            <FormField
              label="Additional Notes"
              name="message"
              as="textarea"
              value={values.message}
              onChange={(v) => handleChange('message', v)}
            />

            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
            </Button>

            <FormStatusMessage
              status={status}
              successMessage="Thanks! Your financing inquiry has been sent, our finance team will follow up soon."
            />
          </form>
        </section>

        <section className={styles.faqSection}>
          <SectionHeading title="Financing Questions" align="center" />
          <div className={styles.faqWrap}>
            <FaqAccordion items={financingFaq} />
          </div>
        </section>
      </Container>
    </>
  )
}

export default Financing
