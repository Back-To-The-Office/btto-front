import { REGISTRATION_SUCCESS } from './registration.actions-types';

const INITIAL_STATE = {
    userEmail: ''
}

const registrationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {
                ...state, ...action.registerData
            }
        default:
            return state
    }
}

export default registrationReducer