import axios from 'axios';
import { Puerto, BaseURL } from '../BaseURL';

const personasApi = axios.create({
    baseURL: `${BaseURL}${Puerto}`
});

export { personasApi };
