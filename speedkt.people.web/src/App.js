import React, { Component } from 'react';

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import { Sidebar } from './components/Sidebar.js';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import { SecurityInfo } from './components/SecurityInfo.js';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Sidebar />

                <Routes>
                    <Route exact path="/basicInfo/:personID" element={<BasicInfo />}></Route>
                    <Route exact path="/contactInfo/:personID" element={<ContactInfo />}></Route>
                    <Route exact path="/securityInfo" element={<SecurityInfo />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
