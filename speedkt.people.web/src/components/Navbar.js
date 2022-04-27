import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Stack } from '@mui/material';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Navbar.css';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar-container">
            <div className="navbar-title">Speed KT - People</div>

            <Stack direction="row" justifyContent="end">
                {
                    isAuthenticated
                        ? <LogoutButton />
                        : <LoginButton />
                }
            </Stack>
        </div>
    );
};

export default Navbar;