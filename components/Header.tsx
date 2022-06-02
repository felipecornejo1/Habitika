import Image from 'next/image'
import styles from '../styles/Header.module.scss'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export default function Header() {
  return (
    <header id={styles.header}>
      <Image
        src='/logo-sm.png'
        alt='logo'
        width='50%'
        height='50%'
        className={styles.header__logo}
      />
      <MenuRoundedIcon fontSize='inherit' />
    </header>
  )
}
