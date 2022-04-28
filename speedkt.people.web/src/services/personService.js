import httpRequest from '../common/httpRequest';

const getPersonInfo = (personId) => {
    return httpRequest.get(`/Person/${personId}`);
};

const getAvatarUrl = (personId) => {
    const imageUrl = `https://speedkt-avatar.s3.amazonaws.com/${personId}.jpeg`;

    //Add random values at the end to update UI when the avatar image is updated under the same URL name
    return `${imageUrl}?${new Date().getTime()}`;
};

const updatePersonInfo = (data) => {
    return httpRequest.put('/Person/info', data);
};

const updateAvatar = (data) => {
    return httpRequest.put('/Person/avatar', data);
};

const PersonService = {
    getPersonInfo,
    getAvatarUrl,
    updatePersonInfo,
    updateAvatar
};

export default PersonService;