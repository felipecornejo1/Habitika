import { LoadingButton } from './index'
import styles from '../styles/LoginHeader.module.scss'

import { TextField, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

export default function LoginForm() {
  return (
    <div>
      <div className={styles.flexboxContainer}>
        <TextField id='outlined-basic' label='Username' variant='outlined' />
      </div>
      <div className={styles.flexboxContainer}>
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
      </div>
      <div className={styles.flexboxContainer}>
        {/* mUI tiene props que para cuando se haga el fetch el boton tiene animacion loading*/}
        <LoadingButton />
      </div>
      <div className={styles.flexboxContainer}>
        <Button id='google-btn' variant='contained'>
          {' '}
          <GoogleIcon fontSize='small' sx={{ marginRight: '0.5em;' }} />
          Login with Google
        </Button>
      </div>
    </div>
  )
}
