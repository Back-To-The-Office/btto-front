import is from 'is_js';

class ValidationService {
    isValid(field) {
        const { isRequired, isEmail, isPassword } = field.validation;
        let isValid = true;
        isValid = isRequired ? isValid && this._isRequired(field.value) : isValid;
        isValid = isEmail ? isValid && this._isEmail(field.value) : isValid;
        isValid = isPassword ? isValid && this._isPassword(field.value) : isValid;

        return isValid;
    }

    _isRequired(value) {
        return value.trim() !== '';
    }

    _isEmail(value) {
        return is.email(value);
    }

    _isPassword(value) {
        const passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return !!value.match(passwordExpression);
    }
}

export default new ValidationService();