import styles from '../../styles/Dashboard.module.scss'
import { DashboardTabs, DashboardHabits, DashboardTasks } from '../index'

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardTabs />
      <DashboardHabits
        habits={[
          { id: 1, name: 'habit1', description: 'this is a description' },
        ]}
      />
      {/* <DashboardTasks /> */}
    </div>
  )
}
