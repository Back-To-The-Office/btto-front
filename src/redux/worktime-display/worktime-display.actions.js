import { SET_USER_WORKTIME, CLEAR_USER_WORKTIME } from './worktime-display.actions-types';

export const setUserWorkTime = (pickedWorkTime, pickedTimezone) => ({
    type: SET_USER_WORKTIME,
    payload: {pickedWorkTime, pickedTimezone}
});

export const clearUserWorkTime = () => ({
    type: CLEAR_USER_WORKTIME
})