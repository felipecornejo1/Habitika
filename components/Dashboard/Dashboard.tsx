import styles from '../../styles/Dashboard.module.scss'
import { DashboardTabs, DashboardHabits, DashboardTasks, Feed } from '../index'
import { useDashboardTabs } from '../../hooks/useDashboardTabs'

export default function Dashboard() {
  const { dashboardTabState } = useDashboardTabs()
  const tab = dashboardTabState.tab

  return (
    <div className={styles.dashboard}>
      <DashboardTabs />
      {tab === 'habits' && (
        <DashboardHabits
          habits={[
            { id: 1, name: 'habit1', description: 'this is a description' },
          ]}
        />
      )}
      {tab === 'tasks' && (
        <DashboardTasks
          tasks={[
            { id: 1, name: 'task1', description: 'this is a description' },
          ]}
        />
      )}
      <Feed />
    </div>
  )
}
