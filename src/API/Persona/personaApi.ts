import axios from 'axios';

const PersonasApi = axios.create({
    baseURL: 'http://localhost:3002/Persona',
    withCredentials: true
});

export {PersonasApi}