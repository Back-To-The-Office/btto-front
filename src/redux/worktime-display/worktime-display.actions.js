import { SET_USER_WORKTIME, CLEAR_USER_WORKTIME } from './worktime-display.actions-types';
import { INITIAL_STATE } from './worktime-display.reducer';

export const pickUser = userInfo => (dispatch, getState) => {
    const currentWorktimeDisplayState = JSON.stringify(getState().worktimeDisplay);
    const initialWorktimeDisplayState = JSON.stringify(INITIAL_STATE);
    if (currentWorktimeDisplayState === initialWorktimeDisplayState) {
        dispatch(setUserWorktime(userInfo));
    } else {
        dispatch(clearUserWorktime())
    }
} 


const setUserWorktime = userInfo => ({
    type: SET_USER_WORKTIME,
    payload: userInfo
});

const clearUserWorktime = () => ({
    type: CLEAR_USER_WORKTIME
})