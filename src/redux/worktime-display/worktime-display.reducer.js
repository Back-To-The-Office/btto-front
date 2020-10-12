import { SET_USER_WORKTIME, CLEAR_USER_WORKTIME } from './worktime-display.actions-types';

export const INITIAL_STATE = {
    pickedWorkTime: [],
    pickedTimezone: ''
}

const worktimeDisplayReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_WORKTIME:
            return action.payload
        case CLEAR_USER_WORKTIME:
            return INITIAL_STATE
        default:
            return state
    }
}

export default worktimeDisplayReducer