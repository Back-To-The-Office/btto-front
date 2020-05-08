import { AUTH_LOGOUT, AUTH_SUCCESS } from './auth.actions-types';

const INITIAL_STATE = {
    user: {
        id: 1,
        timezone: 0,
        name: 'Ester Jones',
        geo: 'London, United Kingdom',
        role: 'Manager',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg',
        isOnline: true,
        workTime: [[9, 16]]
    },
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