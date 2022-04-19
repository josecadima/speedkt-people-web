import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BasicInfo = (props) => {
    useEffect(() => {
        getPersonBasicInfo();
    }, []);

    const { personID } = useParams();

    const [personInfo, setPersonInfo] = useState([]);

    let getPersonBasicInfo = () => {
        try {
            const response = axios.get(`https://localhost:44379/Person/${personID}`)
                .then(response => {
                    const data = response.data;
                    setPersonInfo(data);
                });
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div class="basic-info-container">
            <h1>Personal information {personInfo.nickName}</h1>
            <div>First Name: {personInfo.firstName}</div>
            <div>Last Name: {personInfo.lastName}</div>
        </div>
    );
};

export default BasicInfo;