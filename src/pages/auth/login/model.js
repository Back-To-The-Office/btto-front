export default {
    email: {
        type: 'email',
        value: '',
        label: 'Email',
        isTouched: false,
        isValid: false,
        placeholder: 'yourmail@gmail.com',
        errorMessage: 'Please enter a valid email',
        validation: {
            isRequired: true,
            isEmail: true
        }
    },
    password: {
        type: 'password',
        value: '',
        label: 'Password',
        isTouched: false,
        isValid: false,
        placeholder: '',
        errorMessage: 'This field is required',
        validation: {
            isRequired: true
        }
    }
}