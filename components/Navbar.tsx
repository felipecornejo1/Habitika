import { useState } from 'react'

// Material UI
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

export default function Navbar() {
  const [value, setValue] = useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction value='home' icon={<HomeRoundedIcon />} />
      <BottomNavigationAction value='search' icon={<SearchRoundedIcon />} />
      <BottomNavigationAction
        value='notifications'
        icon={<NotificationsRoundedIcon />}
      />
      <BottomNavigationAction value='profile' icon={<PersonRoundedIcon />} />
    </BottomNavigation>
  )
}
