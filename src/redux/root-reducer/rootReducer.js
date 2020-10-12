import { combineReducers } from 'redux';
import registrationReducer from '../registration/registration.reducer';
import authReducer from '../auth/auth.reducer';
import worktimeDisplayReducer from '../worktime-display/worktime-display.reducer';

export default combineReducers({
    registration: registrationReducer,
    auth: authReducer,
    worktimeDisplay: worktimeDisplayReducer
})