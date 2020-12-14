export default {
    firstName: {
        type: 'text',
        value: '',
        label: 'First name',
        isTouched: false,
        isValid: false,
        placeholder: 'Alex',
        errorMessage: 'This field is required',
        validation: {
            isRequired: true
        }
    },
    lastName: {
        type: 'text',
        value: '',
        label: 'Last name',
        isTouched: false,
        isValid: false,
        placeholder: 'Mitchell',
        errorMessage: 'This field is required',
        validation: {
            isRequired: true
        }
    },
    position: {
        type: 'text',
        value: '',
        label: 'Position',
        isTouched: false,
        isValid: false,
        placeholder: 'Manager',
        errorMessage: 'This field is required',
        validation: {
            isRequired: true
        }
    },
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
        errorMessage: 'The password should be 6 to 20 characters long, must contain uppercase and lowercase letters and numbers.',
        validation: {
            isRequired: true, 
            isPassword: true
        }
    }
}