import httpRequest from '../common/httpRequest';

const getAccountInfo = (data) => {
    console.log("Checking person account");

    return httpRequest.post('/Account/check', data );
};

const AccountService = {
    getAccountInfo    
};

export default AccountService;