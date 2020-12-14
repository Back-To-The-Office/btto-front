import axios from 'axios';
import { mapRegistrationData, mapLoginData } from '../mappers/dataMapper';

export const registerUser = async fields => {
    const registerData = mapRegistrationData(fields);

    const registerUrl = 'https://btto-back.herokuapp.com/api/v1/users/register';
    try {
        const response = await axios.post(registerUrl, registerData)
        return response.data;
    } catch (error) {
        throw new Error();
    }
};

export const loginUser = async fields => {
    const loginData = mapLoginData(fields);

    const loginUrl = 'https://btto-back.herokuapp.com/api/v1/users/register';

    try {
        const response = await axios.post(loginUrl, loginData);
        return response.data;
    } catch (error) {
        throw error;
    }
}
