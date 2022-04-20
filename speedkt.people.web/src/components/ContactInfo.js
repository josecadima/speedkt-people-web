import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import PersonService from '../services/personService'

import './ContactInfo.css'

const ContactInfo = (props) => {
    let { personId } = useParams();
    const [personContact, setPersonContact] = useState([]);

    const savePersonContact = () => {
        PersonService.updatePersonContact(personContact)
            .then(response => {
                console.log('person contact saved');
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;
        setPersonContact({ ...personContact, [name]: value });
    };

    return (
        <div className='contact-info-container'>
            <div>
                <label htmlFor='personEmail'>Email</label>
                <input type='text' className='form-control' id='email' name='email' required
                    value={personContact.email}
                    onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor='personMobile'>Mobile</label>
                <input type='text' className='form-control' id='mobile' name='mobile' required
                    value={personContact.mobile}
                    onChange={onInputChange} />
            </div>

            <button onClick={savePersonContact} className='btn btn-success'>
                Save
            </button>
        </div>
    );
};

export default ContactInfo;