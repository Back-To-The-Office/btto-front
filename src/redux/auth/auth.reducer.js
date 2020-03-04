import { AUTH_SUCCESS } from './auth.actions-types';

const INITIAL_STATE = {
    user: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, user: action.user
            }
        default:
            return state
    }
}

export default authReducer