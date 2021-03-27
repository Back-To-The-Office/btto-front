import { FieldData } from '../interfaces';

const isRequired = (value: string): boolean => {
    return value.trim() !== ``;
};

const isEmail = (value: string): boolean => {
    const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !!value.match(emailExpression);
};

const isPassword = (value: string): boolean => {
    const passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return !!value.match(passwordExpression);
}

const validate = (field: FieldData): boolean => {
    const { validation, value } = field;
    let isValid: boolean = true;

    isValid = validation.isRequired ? isValid && isRequired(value) : isValid;
    isValid = validation.isEmail ? isValid && isEmail(value) : isValid;
    isValid = validation.isPassword ? isValid && isPassword(value) : isValid;

    return isValid;
};

const validationHelper = {
    validate
};

export default validationHelper;
