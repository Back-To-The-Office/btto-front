import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import is from 'is_js';
import './registration.styles.scss';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth';
import { ReactComponent as RegisterImage } from '../../assets/registration.svg';

const checkPassword = password => {
    let passExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passExp)) {
        return true
    } else {
        return false
    }
}

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
                value: '',
                label: 'First name',
                isTouched: false,
                isValid: false,
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
                errorMessage: 'Please enter a valid password',
                validation: {
                    isRequired: true, 
                    isPassword: true
                }
            }
        }
    }

    handleChange = input => event => {
        const fields = {...this.state.fields}
        const value = event.target.value,
              field = {...fields[input]};

        field.value = value;
        field.isTouched = true;
        field.isValid = this.checkValid(value, field);

        fields[input] = field;

        let isFormValid = true;

        Object.keys(fields).forEach(fieldName => {
            isFormValid = fields[fieldName].isValid === true && isFormValid && this.state.privacyTerm.isChecked;
        })

        this.setState({
            isFormValid, fields
        })
    }

    checkValid = (value, field) => {

        const { isRequired, isEmail, isPassword } = field.validation;

        let isValid = true;

        if (isRequired) {
            isValid = value.trim() !== '' && isValid;
          }

        if (isEmail) {
            isValid = is.email(value) && isValid;
        }

        if (isPassword) {
            isValid = checkPassword(value) && isValid;
        }

        return isValid
    }

    handleCheckbox = () => {
        this.setState({
            privacyTerm: {
                ...this.state.privacyTerm,
                isChecked: !this.state.privacyTerm.isChecked
            }
        });

        const { fields } = this.state;

        let isFormValid = true;

        Object.keys(fields).forEach(fieldName => {
            isFormValid = fields[fieldName].isValid === true && isFormValid && this.state.privacyTerm.isChecked;
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleRegister = () => {
        const { firstName, lastName, email, password } = this.state.fields;

        this.props.register(
            firstName.value,
            lastName.value,
            email.value,
            password.value
        )
    }

    render() {
        return (
            <section className="registration">
                <div className="container">
                    <div className="registration-content">
                        <div className="registration-content__left">
                            <h1 className="section-header">Registration</h1>
                            <form className="registration-form" onSubmit={this.handleSubmit}>
                                {Object.keys(this.state.fields).map((fieldName, index) => {
                                    const field = this.state.fields[fieldName];
                                    const { type, value, label, errorMessage, isValid, isTouched, validation } = field;
                                    return (
                                        <TextField
                                            type={type}
                                            value={value} 
                                            key={index}
                                            required={validation.isRequired}
                                            error={!isValid && isTouched}
                                            label={label}
                                            helperText={isValid || !isTouched ? '' : errorMessage}
                                            variant='outlined'
                                            onChange={this.handleChange(fieldName)}
                                        />
                                    )
                                })}
                                <p className="user-agreement">
                                    By signing up, I agree to the Back To the Office <a target="_blank" className="user-agreement__link" href="#">Privacy Policy</a> and <a target="_blank" className="user-agreement__link" href="#">Terms of Service.</a>
                                </p>
                                <Button 
                                    variant='outlined'
                                    color='#00E676'
                                    disabled={this.state.isFormValid ? false : true}
                                    onClick={this.handleRegister}
                                    size="large"
                                >
                                    Register >
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
        register: (firstName, lastName, email, password) => dispatch(register(firstName, lastName, email, password))
    }
)

export default connect(null, mapDispatchToProps)(Registration)