import axios from 'axios';

const PROTOCOL: string = `https://`;
const BTTO_HOST: string = 'btto-back.herokuapp.com';

type header = {
    Authorization: string
};

export const post = async (requestUrl: string, data: object) => {
    const token: string | null = localStorage.getItem('token');
    const url: string = `${PROTOCOL}${BTTO_HOST}/${requestUrl}`;

    const headers: header = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.post(url, data, { headers });

    return response;
}

export const deleteRequest = async (requestUrl: string) => {
    const token: string | null = localStorage.getItem('token');
    const url: string = `${PROTOCOL}${BTTO_HOST}/${requestUrl}`;

    const headers: header = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.delete(url, { headers });

    return response;
}