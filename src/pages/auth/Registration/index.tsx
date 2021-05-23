import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Snackbar, makeStyles } from '@material-ui/core';
import { ReactComponent as RegisterImage } from '../../../assets/registration.svg';
import AuthController from '../../../controllers/Auth/authController';
import PasswordField from '../components/PasswordField';
import Alert from '../../../components/alert/Alert';
import { BTTO_GREEN, BTTO_GREY } from '../../../common-styles/vars';
import { DescriptionText, DescriptionTextLink } from '../../../common-styles/text/text.styles';
import { AuthSection, AuthContent, AuthSectionHeader, AuthForm, AuthContentLeft, AuthContentRight } from '../auth.styles';
import { Container } from '../../../common-styles/wrappers/wrappers.styles';
import validationHelper from '../helpers/validationHelper';
import { auth } from '../../../redux/auth/auth.actions';
import { mapFieldProperties } from '../mappers/fieldsMapper';
import { mapRegistrationData, mapLoginData } from '../mappers/dataMapper';
import { FieldData, RegistrationModelKeys } from '../interfaces';
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

const Registration: React.FC = () => {
    const [isFormValid, toggleFormValidation] = useState(false);
    const [fields, changeFields] = useState(defaultModel);
    const [alert, changeAlert] = useState({isDisplay: false, message: '', type: 'success'});
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleChange = (input: RegistrationModelKeys) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        const field = { ...fields[input] };

        field.value = event.target.value;
        field.isValid = validationHelper.validate(field);
        changeFields({...fields, [input]: field});
        changeFormValidation();
    };

    const changeFormValidation = (): void => {
        let formValidationState: boolean = true;

        Object.values(fields).forEach((field: FieldData) => {
            formValidationState = field.isValid && formValidationState;
        })

        toggleFormValidation(formValidationState);
    };

    const handleFocus = (input: RegistrationModelKeys) => (event: React.FocusEvent<HTMLInputElement>): void => {
        const field: FieldData = { ...fields[input] };

        field.isTouched = false;
        changeFields({...fields, [input]: field});
    }

    const handleBlur = (input: RegistrationModelKeys) => (): void => {
        const field: FieldData  = { ...fields[input] };

        field.isTouched = true;
        changeFields({...fields, [input]: field});
    }

    const handleSubmit = async (): Promise<void> => {
        try {
            await AuthController.register(mapRegistrationData(fields))
            const data = await AuthController.login(mapLoginData(fields));
            dispatch(auth(data));
        } catch (error) {
            changeAlert({isDisplay: true, message: error.message, type: 'error'});
        }
    };

    const handleAlertClose = (): void => {
        changeAlert({...alert, isDisplay: false});
    }

    const renderFields = (): Array<JSX.Element> => {
        return (Object.entries(fields) as Array<[RegistrationModelKeys, FieldData]>).map(([key, value], index: number) => {
            switch (value.type) {
                case 'text':
                case 'email':
                    // @ts-ignore
                    return <TextField className={classes.input} {...mapFieldProperties(value)} onChange={handleChange(key)} onFocus={handleFocus(key)} onBlur={handleBlur(key)} key={index} />;
                case 'password':
                    // @ts-ignore
                    return <PasswordField {...mapFieldProperties(value)} handleChange={handleChange(key)} handleFocus={handleFocus(key)} handleBlur={handleBlur(key)} key={index}
                    />;
                default:
                    throw new Error();
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
                    <AuthSectionHeader>Registration</AuthSectionHeader>
                    <AuthForm>
                        {renderFields()}
                        <DescriptionText>
                            By signing up, I agree to the Back To the Office <DescriptionTextLink target="_blank" href="#">Privacy Policy</DescriptionTextLink> and <DescriptionTextLink target="_blank" href="#">Terms of Service.</DescriptionTextLink>
                        </DescriptionText>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                            size="large"
                        >Register</Button>
                    </AuthForm>
                </AuthContentLeft>
                <AuthContentRight>
                    <RegisterImage />
                </AuthContentRight>
            </AuthContent>
        </Container>
    </AuthSection>;
};

export default Registration;
