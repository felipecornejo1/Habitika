import { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'

export default function LoadingButtonNebro() {
  const [loading, setLoading] = useState(false)
  function handleClick() {
    setLoading(true)
  }

  return (
    <Box sx={{ '& > button': { m: 1 } }}>
      <LoadingButton
        size='medium'
        onClick={handleClick}
        loading={loading}
        variant='contained'
        sx={{ background: '#52b788', '&:hover': { background: '#307756' } }}
      >
        Login
      </LoadingButton>
    </Box>
  )
}
