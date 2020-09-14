import axios from 'axios';
import moment from 'moment-timezone';
import {REGISTRATION_SUCCESS} from './registration.actions-types';

export const register = (firstName, lastName, position, email, password) => async dispatch => {
    const timezone = moment.tz.guess();
    const registerData = {
        email, firstName, lastName, password, timezone
    }

    const registerUrl = 'https://btto-back.herokuapp.com/api/v1/users/register';
    try {
        const response = await axios.post(registerUrl, registerData)
        dispatch(registrationSuccess(response.data));
    } catch (error) {
        throw error
    }
}

export const registrationSuccess = registerData => {
    return {
        type: REGISTRATION_SUCCESS,
        registerData
    }
}