import { AUTH_LOGOUT, AUTH_SUCCESS } from './auth.actions-types';

const INITIAL_STATE = {
    token: null
}

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null
            }
        default:
            return state
    }
}

export default authReducer