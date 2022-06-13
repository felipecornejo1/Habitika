import styles from '../../styles/Dashboard.module.scss'

// Material UI
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import PersonIcon from '@mui/icons-material/Person'
import { useDashboardTabs } from '../../hooks/useDashboardTabs'

const DashboardTabs = () => {
  const { dashboardTabState, openTab } = useDashboardTabs()
  const tab = dashboardTabState.tab
  return (
    <div className={styles.dashboard__tabs}>
      <div
        className={`${styles.dashboard__tabs__tab} ${
          styles.dashboard__tabs__habits
        } ${tab === 'habits' && styles.active}`}
        onClick={() => {
          openTab('habits')
        }}
      >
        <PersonIcon style={{ fontSize: 'inherit', margin: '5px' }} />
        <p>Habits</p>
      </div>
      <div
        className={`${styles.dashboard__tabs__tab} ${
          styles.dashboard__tabs__tasks
        } ${tab === 'tasks' && styles.active}`}
        onClick={() => {
          openTab('tasks')
        }}
      >
        <TaskAltIcon style={{ fontSize: 'inherit', margin: '5px' }} />
        <p>Tasks</p>
      </div>
    </div>
  )
}

export default DashboardTabs
