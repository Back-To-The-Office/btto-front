import React from 'react';
import { AlertContainer, AlertMessage } from './alert.styles';
import { ErrorOutline, Check } from '@material-ui/icons';

const Alert = ({ message, type='success' }) => (
    <AlertContainer type={type}>
        {type === 'success' ? <Check style={{color: '#FFFFFF'}} /> : <ErrorOutline style={{color: '#FFFFFF'}} />}
        <AlertMessage>{message}</AlertMessage>
    </AlertContainer>
);

export default Alert;