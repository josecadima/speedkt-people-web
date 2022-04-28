import React, { useState, useEffect } from 'react';
import { IconButton, Avatar } from '@mui/material';

import PersonService from '../services/personService';
import './EditableAvatar.css';

const EditableAvatar = () => {
    useEffect(() => {
        const personId = localStorage.getItem("personId");
        if (personId != null) {
            updateAvatar(personId);
        }
    }, []);

    const [avatarUrl, setAvatarUrl] = useState('');
    const [uploadingAvatar, setUploadingAvatar] = useState(false);

    const updateAvatar = (personId) => {
        const avatarUrl = PersonService.getAvatarUrl(personId);
        setAvatarUrl(avatarUrl);
        setUploadingAvatar(false);
    };

    const onAvatarSelected = (event) => {
        const personId = localStorage.getItem("personId");
        const avatarImage = event.target?.files?.[0];

        if (avatarImage) {
            setUploadingAvatar(true);

            var reader = new FileReader();
            reader.onload = function () {
                const data = {
                    PersonId: personId,
                    ImageData: reader.result
                };
                PersonService.updateAvatar(data)
                    .then(response => {
                        console.log('person avatar saved');
                        updateAvatar(personId);
                    });
            };
            reader.readAsDataURL(avatarImage);
        }
    };

    return (
        <div className="avatar-container">
            <input accept=".jpg" id="avatar-button-edit" type="file"
                onChange={onAvatarSelected} />
            <label htmlFor="avatar-button-edit">
                <IconButton component="span">
                    <Avatar src={avatarUrl}
                        style={{ width: '100px', height: '100px' }} >
                    </Avatar>
                </IconButton>
            </label>
        </div>
    );
};

export default EditableAvatar;