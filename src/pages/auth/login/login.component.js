import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Snackbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import defaultModel from './model';
import { ReactComponent as LoginImage } from '../../../assets/registration.svg';
import PasswordField from '../components/password-field/password-field.component';
import Alert from '../../../components/alert/alert.component';
import { BTTO_GREEN, BTTO_GREY } from '../../../common-styles/vars';
import { Container } from '../../../common-styles/wrappers/wrappers.styles';
import { DescriptionText } from '../../../common-styles/text/text.styles';
import { AuthSection, AuthContent, AuthSectionHeader, AuthForm, AuthContentLeft, AuthContentRight } from '../auth.styles';
import { mapFieldProperties } from '../mappers/fieldsMapper';
import validationService from '../services/validationService';
import { loginUser } from '../services/addressService';
import { auth } from '../../../redux/auth/auth.actions';

const useStyles = makeStyles({
    button: {
        border: `2px solid ${BTTO_GREEN}`,
        color: BTTO_GREY,
        fontSize: 14,
        maxWidth: 310,
        padding: `10px 0`
    },
    input: {
        marginBottom: 25,
        maxWidth: 310,
        width: `100%`
    }
});

const Login = () => {
    const [isFormValid, toggleFormValidation] = useState(false);
    const [fields, changeFields] = useState({ ...defaultModel });
    const [alert, changeAlert] = useState({isDisplay: false, message: '', type: 'success'});
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleChange = input => event => {
        const field = { ...fields[input] };
        
        field.value = event.target.value;
        field.isValid = validationService.isValid(field);
        changeFields({...fields, [input]: field});
        changeFormValidation();
    };

    const handleFocus = input => () => {
        const field = { ...fields[input] };

        field.isTouched = false;
        changeFields({...fields, [input]: field});
    }

    const handleBlur = input => () => {
        const field = { ...fields[input] };

        field.isTouched = true;
        changeFields({...fields, [input]: field});
    }

    const changeFormValidation = () => {
        let formValidationState = true;
        for (let field in fields) {
            formValidationState = fields[field].isValid && formValidationState;
        }
        toggleFormValidation(formValidationState);
    };

    const handleSubmit = async () => {
        try {
            const data = await loginUser({...fields});
            dispatch(auth(data));
        } catch (error) {
            changeAlert({isDisplay: true, message: error.message, type: 'error'});
        }
    };

    const handleAlertClose = () => {
        changeAlert({...alert, isDisplay: false});
    }

    const renderFields = () => {
        return Object.keys(fields).map((input, index) => {
            const field = fields[input];
            switch (field.type) {
                case 'text':
                case 'email':
                    return (
                        <TextField
                            className={classes.input}
                            {...mapFieldProperties(field)} 
                            onChange={handleChange(input)}
                            onFocus={handleFocus(input)}
                            onBlur={handleBlur(input)} 
                            key={index} 
                        />
                    );
                case 'password':
                    return (
                        <PasswordField
                            {...mapFieldProperties(field)} 
                            handleChange={handleChange(input)}
                            handleFocus={handleFocus(input)}
                            handleBlur={handleBlur(input)} 
                            key={index} 
                        />
                    )
                default:
                    throw new Error();
            }
        });
    }

    return (
        <AuthSection>
            <Snackbar open={alert.isDisplay} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} message={alert.message} type={alert.type} />
            </Snackbar>
            <Container>
                <AuthContent>
                    <AuthContentLeft>
                        <AuthSectionHeader>Login</AuthSectionHeader>
                        <AuthForm>
                            {renderFields()}
                            <DescriptionText>
                                <Link to="/registration">Registration</Link>
                            </DescriptionText>
                            <Button
                                className={classes.button}
                                variant="outlined"
                                disabled={!isFormValid}
                                onClick={handleSubmit}
                                size="large"
                            >Sign in</Button>
                        </AuthForm>
                    </AuthContentLeft>
                    <AuthContentRight>
                        <LoginImage />
                    </AuthContentRight>
                </AuthContent>
            </Container>
        </AuthSection>
    )
}

export default Login;