import Icon from '../Icon/Icon'
import styles from './FaqAccordion.module.scss'

export interface FaqItem {
  question: string
  answer: string
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details className={styles.item} key={item.question}>
          <summary className={styles.question}>
            <span>{item.question}</span>
            <Icon name="chevronDown" size={18} className={styles.chevron} />
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export default FaqAccordion
