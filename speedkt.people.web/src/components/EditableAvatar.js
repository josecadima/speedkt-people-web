import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IconButton, Avatar } from '@mui/material';

import PersonService from '../services/personService';

const EditableAvatar = () => {
    useEffect(() => {
        getAvatar();
    }, []);

    const { personId } = useParams();
    const [ avatarUrl, setAvatarUrl ] = useState('');

    const getAvatar = () => {
        const avatarUrl = PersonService.getAvatarUrl(personId);
        setAvatarUrl(avatarUrl);
    };

    return (
        <div>
            <IconButton>
                <Avatar src={avatarUrl}
                    style={{ width: '100px', height: '100px' }} >
                </Avatar>
            </IconButton>
        </div>
    );
};

export default EditableAvatar;