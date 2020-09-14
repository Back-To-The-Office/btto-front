import axios from 'axios';
import { AUTH_LOGOUT, AUTH_SUCCESS } from './auth.actions-types';

export const auth = (email, password) => async dispatch => {
    const authData = {
        email, password
    }
    const loginUrl = 'asdas';
    try {
        const response = axios.post(loginUrl, authData);
        authUser(response.data);
        dispatch(authSuccess(response.data.idToken));
        dispatch(autoLogout(response.data.expiresIn));
    } catch (error) {
        throw error
    }
    const data = {
        idToken: 'asdasd',
        expiresIn: 1000
    }
    authUser(data);
    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
}

export const authUser = data => {
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('expirationDate', expirationDate);
    console.log(localStorage)
}

export const autoLogout = time => dispatch => {
    setTimeout(() => dispatch(logout()), time * 1000)
}

export const autoLogin = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout());
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate < new Date()) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token));
            dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    }
}

export const authSuccess = token => ({
    type: AUTH_SUCCESS,
    token
})