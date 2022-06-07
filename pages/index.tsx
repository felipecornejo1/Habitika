import type { NextPage } from 'next'
import { Dashboard, Feed } from '../components/index'
import styles from '../styles/Home.module.scss'

// Material UI
import { Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <main id='Home'>
      <Container>
        <Dashboard />
        {/* <Feed /> */}
      </Container>
    </main>
  )
}

export default Home
