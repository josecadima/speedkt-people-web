import React from 'react';
import { useParams } from 'react-router-dom';

const BasicInfo = (props) => {
    let { personID } = useParams();

    return <div>
        <h1>basic info</h1>
        <span>{personID}</span>
    </div>;
};

export default BasicInfo;