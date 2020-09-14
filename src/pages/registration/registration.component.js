import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';
import PasswordField from './password-field/password-field.component';
import SelectField from './select-field/select-field.component';
import './registration.styles.scss';
import {connect} from 'react-redux';
import {register} from '../../redux/registration/registration.actions';
import {ReactComponent as RegisterImage} from '../../assets/registration.svg';
import moment from 'moment-timezone';
import {checkFieldIsValid} from '../../frameworks/registration/registration.framework';

class Registration extends Component {
    state = {
        isFormValid: false,
        privacyTerm: {
            isChecked: true,
            label: 'I agree to the Terms and Conditions'
        },
        fields: {
            firstName: {
                type: 'text',
                value: 'd',
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
                value: 'd',
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
                value: 'd',
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
                value: 'qwe@mail.r',
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
                value: 'qwer1234T',
                label: 'Password',
                isTouched: false,
                isValid: false,
                placeholder: '',
                errorMessage: 'The password should be 6 to 20 characters long, must contain uppercase and lowercase letters and numbers.',
                validation: {
                    isRequired: true, 
                    isPassword: true
                }
            },

            // timezone: {
            //     type: 'select',
            //     value: moment.tz.guess(),
            //     label: 'Timezone',
            //     isTouched: false,
            //     isValid: false,
            //     errorMessage: 'This field is required',
            //     validation: {
            //         isRequired: true
            //     }
            // }
        }
    }

    handleChange = input => event => {
        const fields = {...this.state.fields}
        const value = event.target.value,
              field = {...fields[input]};

        field.value = value;
        field.isTouched = true;
        field.isValid = checkFieldIsValid(value, field);

        fields[input] = field;
        let isFormValid = true;

        Object.keys(fields).forEach(fieldName => {
            isFormValid = fields[fieldName].isValid === true && isFormValid && this.state.privacyTerm.isChecked;
        })

        this.setState({
            isFormValid, fields
        })
    }

    handleRegister = () => {
        const { firstName, lastName, position, email, password } = this.state.fields;
        const { register, history } = this.props;
        console.log(password.value)
        register(
            firstName.value,
            lastName.value,
            position.value,
            email.value,
            password.value
        )
        // history.push('/verification');
    }

    handleClickShowPassword = () => {
        const password = {...this.state.fields.password};
        password.isDisplay = !password.isDisplay;
        this.setState({
            ...this.state,
            fields: {
                ...this.state.fields,
                password
            }
        })
    }

    handleMouseDownPassword = event => {
        event.preventDefault()
    }

    renderFields = (fieldName, index) => {
        const field = this.state.fields[fieldName];
        const { type, value, label, errorMessage, isValid, isTouched, validation, placeholder } = field;
        switch (type) {
            case 'text':
            case 'email':
                return (
                    <TextField
                        type={type}
                        value={value} 
                        key={index}
                        placeholder={placeholder}
                        required={validation.isRequired}
                        error={!isValid && isTouched}
                        label={label}
                        helperText={isValid || !isTouched ? '' : errorMessage}
                        variant='outlined'
                        onChange={this.handleChange(fieldName)}
                    />
                )
            case 'password':
                return (
                    <PasswordField
                        label={label}
                        value={value}
                        key={index}
                        validation={validation}
                        isValid={isValid}
                        isTouched={isTouched}
                        errorMessage={errorMessage}
                        handleChange={this.handleChange(fieldName)}
                    />
                )
            // case 'select':
            //     return (
            //         <SelectField
            //             key={index}
            //             label={label}
            //             value={value}
            //             handleChange={this.handleChange(fieldName)}
            //             options={moment.tz.names()}
            //         />
            //     )
            default:
                break;
        }
    }

    render() {
        return (
            <section className="registration">
                <div className="container">
                    <div className="registration-content">
                        <div className="registration-content__left">
                            <h1 className="section-header">Registration</h1>
                            <form className="registration-form">
                                {Object.keys(this.state.fields).map((fieldName, index) => this.renderFields(fieldName, index))}
                                <p className="description-text">
                                    By signing up, I agree to the Back To the Office <a target="_blank" className="description-text__link" href="#">Privacy Policy</a> and <a target="_blank" className="description-text__link" href="#">Terms of Service.</a>
                                </p>
                                <Button 
                                    variant='outlined'
                                    disabled={this.state.isFormValid ? false : true}
                                    onClick={this.handleRegister}
                                    size="large"
                                >
                                    Register
                                </Button>
                            </form>
                        </div>
                        <div className="registration-content__right">
                            <RegisterImage />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => (
    {
        register: (firstName, lastName, position, email, password) => dispatch(register(firstName, lastName, position, email, password))
    }
)

export default connect(null, mapDispatchToProps)(Registration)