import axios from 'axios';
import { mapRegistrationData, mapLoginData } from '../mappers/dataMapper';

const PROTOCOL = `https://`;
const BTTO_HOST = 'btto-back.herokuapp.com';
const CLIENT_ID = 'coreclient';
const CLIENT_SECRET = 'Qv9XcwpraF67mCmM';

export const registerUser = async fields => {
    const registerData = mapRegistrationData(fields);
    const registerUrl = `${PROTOCOL}${BTTO_HOST}/api/v1/users/register`;

    const response = await axios.post(registerUrl, registerData)

    if (response.status === 201) {
        return response.data;
    }

    throw new Error(`Registration error`)
};

export const loginUser = async fields => {
    const loginData = mapLoginData(fields);

    const loginUrl = `${PROTOCOL}${CLIENT_ID}:${CLIENT_SECRET}@${BTTO_HOST}/oauth/token`;

    const response = await axios.post(loginUrl, loginData);

    if (response.status === 200) {
        return response.data;
    }

    throw new Error(`Login error`)
}
