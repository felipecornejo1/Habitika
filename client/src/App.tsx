import React from 'react';
import {Route, Routes} from 'react-router-dom'

import './assets/css/style.css';
import { Header, Navbar } from './section/index';
import {Home, Profile, Login} from './pages/index';

const App = () => {
    return(
        <div>
            < Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/profile" element={< Profile />} />
                <Route path="/login" element={< Login />} />
            </Routes>
            < Navbar />
        </div>
    )
}

export default App