import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Snackbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { BTTO_GREEN, BTTO_GREY } from '../../../common-styles/vars';
import AuthController from '../../../controllers/Auth/authController';
import { ReactComponent as LoginImage } from '../../../assets/registration.svg';
import PasswordField from '../components/PasswordField';
import Alert from '../../../components/alert/Alert';
import { Container } from '../../../common-styles/wrappers/wrappers.styles';
import { DescriptionText } from '../../../common-styles/text/text.styles';
import { AuthSection, AuthContent, AuthSectionHeader, AuthForm, AuthContentLeft, AuthContentRight } from '../auth.styles';
import { mapFieldProperties } from '../mappers/fieldsMapper';
import { mapLoginData } from '../mappers/dataMapper';
import validationHelper from '../helpers/validationHelper';
import { auth } from '../../../redux/auth/auth.actions';
import { LoginModelKeys, FieldData } from '../interfaces';
import { defaultModel } from './model';

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

const Login: React.FC = () => {
    const [isFormValid, toggleFormValidation] = useState(false);
    const [fields, changeFields] = useState(defaultModel);
    const [alert, changeAlert] = useState({isDisplay: false, message: '', type: 'success'});
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleChange = (input: LoginModelKeys) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        const field = { ...fields[input] };

        field.value = event.target.value;
        field.isValid = validationHelper.validate(field);
        changeFields({...fields, [input]: field});
        changeFormValidation();
    };

    const handleFocus = (input: LoginModelKeys) => (): void => {
        const field = { ...fields[input] };

        field.isTouched = false;
        changeFields({...fields, [input]: field});
    }

    const handleBlur = (input: LoginModelKeys) => (): void => {
        const field = { ...fields[input] };

        field.isTouched = true;
        changeFields({...fields, [input]: field});
    }

    const changeFormValidation = (): void => {
        let formValidationState: boolean = true;

        Object.values(fields).forEach((field: FieldData) => {
            formValidationState = field.isValid && formValidationState;
        })

        toggleFormValidation(formValidationState);
    };

    const handleSubmit = async (): Promise<void> => {
        try {
            const data = AuthController.login(mapLoginData(fields));
            dispatch(auth(data));
        } catch (error) {
            changeAlert({isDisplay: true, message: error.message, type: 'error'});
        }
    };

    const handleAlertClose = (): void => {
        changeAlert({...alert, isDisplay: false});
    };

    const renderFields = () => {
        return (Object.entries(fields) as Array<[LoginModelKeys, FieldData]>).map(([key, value], index: number) => {
            /* tslint:disable */
            switch (value.type) {
                case 'text':
                case 'email':
                    // @ts-ignore
                    return <TextField className={classes.input} {...mapFieldProperties(value)} onChange={handleChange(key)} onFocus={handleFocus(key)} onBlur={handleBlur(key)} key={index} />;
                case 'password':
                    return <PasswordField {...mapFieldProperties(value)} handleChange={handleChange(key)} handleFocus={handleFocus(key)} handleBlur={handleBlur(key)} key={index} />;
                default:
                    throw new Error();
                /* tslint:enable */
            }
        });
    }

    return <AuthSection>
        <Snackbar open={alert.isDisplay} autoHideDuration={6000} onClose={handleAlertClose}>
            <Alert message={alert.message} type={alert.type} />
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
    </AuthSection>;
}

export default Login;