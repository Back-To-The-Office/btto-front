import moment from 'moment-timezone';
import { RegistrationModel, LoginModel } from '../interfaces';

const GRANT_TYPE = 'password';

export const mapRegistrationData = ({email, firstName, lastName, password }: RegistrationModel) => ({
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
    timezone: moment.tz.guess()
});

export const mapLoginData = ({email, password}: LoginModel) => {
    const loginData = new URLSearchParams();
    loginData.append('username', email.value);
    loginData.append('password', password.value);
    loginData.append('grant_type', GRANT_TYPE);

    return loginData;
};
