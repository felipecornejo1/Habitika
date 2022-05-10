import React from 'react';
import logo from '../../assets/img/logo-sm.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="logo" className='header__logo'/>
            <MenuRoundedIcon fontSize='inherit'/>
        </header>
    )
}

export default Header;