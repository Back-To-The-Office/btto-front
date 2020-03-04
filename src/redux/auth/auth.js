import axios from 'axios';
import { AUTH_SUCCESS } from './auth.actions-types';

export const register = (firstName, lastName, email, password) => async dispatch => {

    const registerData = {
        firstName, lastName, email, password
    }

    // const registerUrl = 'blabla.com';

    // const response = await axios.post(registerUrl, registerData)

    dispatch(authSuccess({firstName, lastName}))
}

export const authSuccess = user => {
    return {
        type: AUTH_SUCCESS,
        user
    }
}