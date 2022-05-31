import React from "react";
import { TextField, Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import LoadingButtonNebro from "../../components/LoadingButton/LoadingButton";
const LoginForm = () => {
    return(
        <div>
            <div className="flexbox-container">
                <TextField  id="outlined-basic" label="Username" variant="outlined" />
            </div>
            <div className="flexbox-container">
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />            
            </div>
            <div className="flexbox-container">
                {/* mUI tiene props que para cuando se haga el fetch el boton tiene animacion loading*/}
                <LoadingButtonNebro/>

            </div>
            <div className="flexbox-container">
                <Button id="google-btn" variant="contained"> <GoogleIcon fontSize="small" sx={{marginRight: '0.5em;'}}/>Login with Google</Button>

            </div>
        </div>
    )
}

export default LoginForm