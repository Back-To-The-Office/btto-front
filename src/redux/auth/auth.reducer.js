import { AUTH_LOGOUT, AUTH_SUCCESS } from './auth.actions-types';

const INITIAL_STATE = {
    user: {
        id: 'ironMan',
        timezone: "America/New_York",
        name: 'Anthony Stark',
        geo: 'New York, USA',
        role: 'Co-Founder "Shield" initiative',
        img: 'https://i.pinimg.com/originals/f0/d3/f9/f0d3f9063896bd44631cb386ebdfd914.jpg',
        isOnline: true,
        workTime: [[10, 14], [16, 23]],
        teams: [{id: 'avengers', name: 'Avengers'}, {id: 'asdasdd232312dasdsa', name: 'Avengurs'}],
        company: {id: 'marvel', name: 'Marvel'}
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