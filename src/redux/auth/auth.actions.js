import { AUTH_LOGOUT, AUTH_SUCCESS } from './auth.actions-types';

export const auth = data => dispatch => {
    authUser(data);
    dispatch(authSuccess(data[`access_token`]));
    dispatch(autoLogout(data[`expires_in`]));
}

export const authUser = data => {
    const expirationDate = new Date(new Date().getTime() + data[`expires_in`] * 1000);

    localStorage.setItem('token', data[`access_token`]);
    localStorage.setItem('expirationDate', expirationDate);
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
