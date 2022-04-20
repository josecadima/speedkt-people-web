import http from '../common/http-axios';

const getPersonInfo = (personId) => {
    return http.get(`/${personId}`);
};

const getAvatarUrl = (personId) => {
    return `https://speedkt-avatar.s3.amazonaws.com/${personId}.jpg`;
};

const updatePersonInfo = (data) => {
    return http.put('info', data);
};

const PersonService = {
    getPersonInfo,
    getAvatarUrl,
    updatePersonInfo
};

export default PersonService;