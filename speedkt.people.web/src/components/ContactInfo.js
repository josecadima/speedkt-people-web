import React from 'react';
import { useParams } from 'react-router-dom';

const ContactInfo = (props) => {
    let { personId } = useParams();

    return <h2>Contact Info: {personId}</h2>;
};

export default ContactInfo;