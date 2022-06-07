import { useState } from 'react'
import styles from '../../styles/Dashboard.module.scss'

// Material UI
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import PersonIcon from '@mui/icons-material/Person'

type dashboardTabType = 'habits' | 'tasks'

const DashboardTabs = () => {
  const [dashboardTab, setDashboardTab] = useState<dashboardTabType>('habits')

  return (
    <div className={styles.dashboard__tabs}>
      <div
        className={`${styles.dashboard__tabs__tab} ${
          styles.dashboard__tabs__habits
        } ${dashboardTab == 'habits' && styles.active}`}
        onClick={() => setDashboardTab('habits')}
      >
        <PersonIcon style={{ fontSize: 'inherit', margin: '5px' }} />
        <p>Habits</p>
      </div>
      <div
        className={`${styles.dashboard__tabs__tab} ${
          styles.dashboard__tabs__tasks
        } ${dashboardTab == 'tasks' && styles.active}`}
        onClick={() => setDashboardTab('tasks')}
      >
        <TaskAltIcon style={{ fontSize: 'inherit', margin: '5px' }} />
        <p>Tasks</p>
      </div>
    </div>
  )
}

export default DashboardTabs
