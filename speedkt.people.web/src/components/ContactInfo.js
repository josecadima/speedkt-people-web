import React from 'react';
import { useParams } from 'react-router-dom';

const ContactInfo = (props) => {
    let { personID } = useParams();

    return <h2>Contact Info: {personID}</h2>;
};

export default ContactInfo;