import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <a className="link-light" href="#" onClick={() => loginWithRedirect()}>
            Log In
        </a>
    );
};

export default LoginButton;