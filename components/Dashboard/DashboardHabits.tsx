import { useState } from 'react'
import styles from '../../styles/Dashboard.module.scss'

// Material UI
import { Box, Container, Checkbox, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface IHabit {
  id: number
  name: string
  description: string
}

const DashboardHabits = ({ habits }: { habits: IHabit[] }) => {
  return (
    <Container className={styles.dashboard__habits}>
      {habits.map((habit) => (
        <Box key={habit.id} className={styles.dashboard__habits__habit}>
          <Checkbox color='success' />
          <Typography width='fit-content' sx={{ flexGrow: 1, fontWeight: 600 }}>
            {habit.name}
          </Typography>

          <MoreHorizIcon
            sx={{ color: '#2d6a4f', marginRight: '10px', fontSize: '2rem' }}
          />
        </Box>
      ))}
    </Container>
  )
}

export default DashboardHabits
