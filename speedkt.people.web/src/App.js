import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import Sidebar from './components/Sidebar';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import { SecurityInfo } from './components/SecurityInfo.js';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'wrap', bgcolor: 'background.paper' }}>
                    <Sidebar />

                    <Routes>
                        <Route exact path="/basicInfo/:personId" element={<BasicInfo />}></Route>
                        <Route exact path="/contactInfo/:personId" element={<ContactInfo />}></Route>
                        <Route exact path="/securityInfo" element={<SecurityInfo />}></Route>
                    </Routes>
                </Box>
            </BrowserRouter>
        );
    }
}
