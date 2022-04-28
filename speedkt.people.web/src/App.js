import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';

import Sidebar from './components/Sidebar';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import SecurityInfo from './components/SecurityInfo';
import Navbar from './components/Navbar';

import AccountService from './services/accountService';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [accountInfo, setAccountInfo] = useState({ PersonId: null, Auth0Id: '' });

    useEffect(() => {
        if (!isAuthenticated)
            return;

        const getAccessToken = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: 'https://speedkt.com/people/api'
            });

            localStorage.setItem("token", accessToken);
            console.log("Access token retrieved");

            accountInfo.Auth0Id = user.sub.replace('auth0|', '');
            AccountService.getAccountInfo(accountInfo)
                .then(response => {
                    const data = response.data;
                    localStorage.setItem("personId", data.personId);
                    setAccountInfo(data);

                    console.log("Person account retrieved");
                })
                .catch(reason => {
                    console.log("Failed getting person account");
                });
        };

        getAccessToken();
    }, [getAccessTokenSilently, user?.sub]);

    if (!isAuthenticated || accountInfo.personId == null)
        return <Navbar />;

    return (
        <div>
            <Navbar />

            <BrowserRouter>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', bgcolor: 'background.paper' }}>
                    <Sidebar />

                    <Routes>
                        <Route exact path="/" element={<BasicInfo />}></Route>
                        <Route exact path="/basicInfo" element={<BasicInfo />}></Route>
                        <Route exact path="/contactInfo" element={<ContactInfo />}></Route>
                        <Route exact path="/securityInfo" element={<SecurityInfo />}></Route>
                    </Routes>
                </Box>
            </BrowserRouter>
        </div>
    );
};

export default App;