import httpRequest from '../common/httpRequest';

const getPersonInfo = (personId) => {
    return httpRequest.get(`/${personId}`);
};

const getAvatarUrl = (personId) => {
    const imageUrl = `https://speedkt-avatar.s3.amazonaws.com/${personId}.jpeg`;

    //Add random values at the end to update UI when the avatar image is updated under the same URL name
    return `${imageUrl}?${new Date().getTime()}`;
};

const updatePersonInfo = (data) => {
    return httpRequest.put('info', data);
};

const updateAvatar = (data) => {
    return httpRequest.put('avatar', data);
};

const PersonService = {
    getPersonInfo,
    getAvatarUrl,
    updatePersonInfo,
    updateAvatar
};

export default PersonService;