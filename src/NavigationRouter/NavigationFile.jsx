import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accesories from '../Components/Accesories';
import Home from '../Components/Home';
import Ipad from '../Components/Ipad'
import IPHONE from '../Components/IPHONE';
import Macbook from '../Components/Macbook';
import Watches from '../Components/Watches';
import Banner from '../Components/Banner';

const NavigationFile = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ipad" element={<Ipad/>} />
            <Route path="/iphone" element={<IPHONE/>} />
            <Route path="/watches" element={<Watches/>} />
            <Route path="/macbook" element={<Macbook/>} />
            <Route path="/accesories" element={<Accesories/>} />
        </Routes>
    )
}

export default NavigationFile