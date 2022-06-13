import styles from '../../styles/Dashboard.module.scss'

// Material UI
import { Box, Checkbox, Container, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface ITask {
  id: number
  name: string
  description: string
}

const DashboardTasks = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <Container className={styles.dashboard__habits}>
      {tasks.map((task) => (
        <Box key={task.id} className={styles.dashboard__habits__habit}>
          <Checkbox color='success' />
          <Typography width='fit-content' sx={{ flexGrow: 1, fontWeight: 600 }}>
            {task.name}
          </Typography>

          <MoreHorizIcon
            sx={{ color: '#2d6a4f', marginRight: '10px', fontSize: '2rem' }}
          />
        </Box>
      ))}
    </Container>
  )
}

export default DashboardTasks
