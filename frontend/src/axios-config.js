import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:8080'
// });
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.common = {'Authorization': localStorage.getItem('token')}
// axios.defaults.headers.common = {'Authorization': 'TOKEN_0104a457-a77f-4d23-ba5b-215ed9c20b88'}


export default axios;
