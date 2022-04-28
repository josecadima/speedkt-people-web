import axios from 'axios'

const http = axios.create({
    baseURL: 'https://localhost:44379',
    headers: {
        'content-type': 'application/json'
    }
});

http.interceptors.request.use(request => {
    console.log("Adding token to the header request");

    request.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;

    return request;
});

export default http;