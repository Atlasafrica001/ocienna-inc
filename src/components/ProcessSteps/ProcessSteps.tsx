import styles from './ProcessSteps.module.scss'

export interface ProcessStep {
  title: string
  body: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  tone?: 'light' | 'dark'
}

function ProcessSteps({ steps, tone = 'light' }: ProcessStepsProps) {
  return (
    <ol className={`${styles.steps} ${tone === 'dark' ? styles.dark : ''}`}>
      {steps.map((step, index) => (
        <li className={styles.step} key={step.title}>
          <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default ProcessSteps
