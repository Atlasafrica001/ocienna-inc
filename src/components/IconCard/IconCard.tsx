import Icon from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import styles from './IconCard.module.scss'

interface IconCardProps {
  icon: IconName
  title: string
  body: string
  tone?: 'light' | 'dark'
}

function IconCard({ icon, title, body, tone = 'light' }: IconCardProps) {
  return (
    <div className={`${styles.card} ${tone === 'dark' ? styles.dark : ''}`}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={22} />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default IconCard
