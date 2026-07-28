import styles from './StatBar.module.scss'

export interface Stat {
  value: string
  label: string
}

function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <dl className={styles.stats}>
      {stats.map((stat) => (
        <div className={styles.stat} key={stat.label}>
          <dt className={styles.value}>{stat.value}</dt>
          <dd className={styles.label}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}

export default StatBar
