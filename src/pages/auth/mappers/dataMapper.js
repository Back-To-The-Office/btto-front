import moment from 'moment-timezone';

export const mapRegistrationData = ({email, firstName, lastName, password }) => ({
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
    timezone: moment.tz.guess()
});

export const mapLoginData = ({email, password}) => ({
    email: email.value,
    password: password.value
});
