import http from '../common/http-axios';

const getPersonInfo = (personId) => {
    return http.get(`/${personId}`);
}

const updatePersonInfo = (data) => {
    return http.put('info', data);
}

const PersonService = {
    getPersonInfo,
    updatePersonInfo
};

export default PersonService;