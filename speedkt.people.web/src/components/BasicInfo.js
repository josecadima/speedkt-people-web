import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import PersonService from '../services/personService';

import './BasicInfo.css';
import EditableAvatar from './EditableAvatar';

const BasicInfo = (props) => {
    useEffect(() => {
        const personId = localStorage.getItem("personId");
        if (personId != null) {
            getPersonBasicInfo(personId);
        }
    }, []);

    const [personInfo, setPersonInfo] = useState({ personId: '' });

    const getPersonBasicInfo = (personId) => {
        PersonService.getPersonInfo(personId)
            .then(response => {
                const data = response.data;
                setPersonInfo(data);
                console.log("Person info retrieved");
            })
            .catch(reason => {
                console.log("Failed getting person info");
            });
    };

    const savePersonInfo = () => {
        PersonService.updatePersonInfo(personInfo)
            .then(response => {
                console.log('person info saved');
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;
        setPersonInfo({ ...personInfo, [name]: value });
    };

    return (
        <div className='basic-info-container'>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <EditableAvatar />

                <div className='basic-info-nickname'>{ personInfo.nickName}</div>
            </Box>

            <div>
                <label htmlFor='nickName'>Nick name</label>
                <input type='text' className='form-control' id='nickName' name='nickName' required
                    value={personInfo.nickName}
                    onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='firstName'>First name</label>
                <input type='text' className='form-control' id='firstName' name='firstName' required
                    value={personInfo.firstName}
                    onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='lastName'>Last name</label>
                <input type='text' className='form-control' id='lastName' name='lastName' required
                    value={personInfo.lastName}
                    onChange={onInputChange} />
            </div>

            <button onClick={savePersonInfo} className='btn btn-success'>
                Save
            </button>
        </div>
    );
};

export default BasicInfo;