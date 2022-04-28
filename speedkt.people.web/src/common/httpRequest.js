import axios from 'axios'

export default axios.create({
    baseURL: 'https://localhost:44379',
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
});