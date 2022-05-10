import React from 'react';
import {Route, Routes} from 'react-router-dom'

import './assets/css/style.css';
import { Header, Navbar } from './containers/index';
import {Home, Profile} from './pages/index';

const App = () => {
    return(
        <div>
            < Header />
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route exact path="/profile" element={< Profile />} />
            </Routes>
            < Navbar />
        </div>
    )
}

export default App