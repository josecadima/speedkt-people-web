import http from '../common/http-axios';

const getPersonInfo = (personId) => {
    return http.get(`/${personId}`);
};

const getAvatarUrl = (personId) => {
    const imageUrl = `https://speedkt-avatar.s3.amazonaws.com/${personId}.jpeg`;

    //Add random values at the end to update UI when the avatar image is updated under the same URL name
    return `${imageUrl}?${new Date().getTime()}`;
};

const updatePersonInfo = (data) => {
    return http.put('info', data);
};

const updateAvatar = (data) => {
    return http.put('avatar', data);
};

const PersonService = {
    getPersonInfo,
    getAvatarUrl,
    updatePersonInfo,
    updateAvatar
};

export default PersonService;