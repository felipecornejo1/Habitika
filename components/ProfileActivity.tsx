import styles from '../styles/ProfileActivity.module.scss'
import { AlignItemsList } from './index'

export default function ProfileActivity() {
  return (
    <div>
      <div className={`${styles.flexboxContainer} ${styles.activity}`}>
        <h3 id={styles.activityText}>Activity</h3>
      </div>
      <AlignItemsList />
    </div>
  )
}
