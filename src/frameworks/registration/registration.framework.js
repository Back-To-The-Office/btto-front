import is from 'is_js';

export const checkFieldIsValid = (value, field) => {
    const {isRequired, isEmail, isPassword} = field.validation;
    let isValid = true;
    if (isRequired) {
        isValid = checkFieldIsNotEmpty(value) && isValid;
    }
    if (isEmail) {
        isValid = checkEmailIsValid(value);
    }
    if (isPassword) {
        isValid = checkPasswordIsValid(value);
    }
    return isValid
}

const checkFieldIsNotEmpty = value => {
    return value.trim() !== '';
}

const checkEmailIsValid = value => {
    return is.email(value);
}

const checkPasswordIsValid = value => {
    let passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return !!value.match(passwordExpression);
}