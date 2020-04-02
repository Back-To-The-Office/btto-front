import { combineReducers } from 'redux';
import registrationReducer from '../registration/registration.reducer';
import authReducer from '../auth/auth.reducer';

export default combineReducers({
    registration: registrationReducer,
    auth: authReducer
})