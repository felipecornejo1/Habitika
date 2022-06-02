import Image from 'next/image'
import styles from '../styles/ProfileHeader.module.scss'

import { Button } from '@mui/material'

const ProfileHeader = () => {
  return (
    <div>
      <div className={styles.flexboxContainer}>
        <div className={`${styles.flexboxItem} ${styles.profilePicture}`}>
          <Image
            src='https://i.imgur.com/JgYD2nQ.jpg'
            alt='profile picture'
            width='100px'
            height='100px'
            className={styles.profilePicture}
          />
        </div>
        <h2 className={styles.name}>Felipe Comejo</h2>
      </div>
      <p className={styles.flexboxItem}>123 followers</p>
      <div className={styles.flexboxItem}>
        <Button variant='outlined' className={styles.profileBtn}>
          Follow
        </Button>
        <Button variant='outlined' className={styles.profileBtn}>
          Message
        </Button>
      </div>
    </div>
  )
}

export default ProfileHeader
