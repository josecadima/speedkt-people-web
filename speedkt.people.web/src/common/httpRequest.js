import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:44379/Person/',
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});