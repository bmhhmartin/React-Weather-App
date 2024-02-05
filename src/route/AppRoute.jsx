import React from 'react';
import {Routes,Route} from "react-router-dom";
import Bangladeshpage from '../pages/BangladeshPage';
import Homepage from '../pages/HomePage';

const Approute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Bangladesh" element={<Bangladeshpage />} />
        </Routes>
    );
}

export default Approute;
