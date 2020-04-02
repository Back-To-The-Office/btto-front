import axios from 'axios';
import { REGISTRATION_SUCCESS } from './registration.actions-types';
import { authUser, authSuccess, autoLogout } from '../auth/auth.actions';

export const register = (firstName, lastName, email, password) => async dispatch => {

    const registerData = {
        firstName, lastName, email, password
    }

    // const registerUrl = 'blabla.com';

    // const response = await axios.post(registerUrl, registerData)
    const data = {
        idToken: '123456',
        expiresIn: 1000
    }
    dispatch(registrationSuccess(registerData));

    authUser(data);
    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
    
}

export const registrationSuccess = registerData => {
    return {
        type: REGISTRATION_SUCCESS,
        registerData
    }
}