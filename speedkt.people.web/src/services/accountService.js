import httpRequest from '../common/httpRequest';

const getAccountInfo = (data) => {
    return httpRequest.post('/Account/check', data );
};

const AccountService = {
    getAccountInfo    
};

export default AccountService;