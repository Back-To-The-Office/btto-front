import React from 'react';
import { AlertContainer, AlertMessage } from './alert.styles';
import { ErrorOutline, Check } from '@material-ui/icons';

interface AlertProps {
    message: string,
    type?: string
};

const Alert: React.FC<AlertProps> = ({ message, type='success' }: AlertProps) => (
    <AlertContainer type={type}>
        {type === 'success' ? <Check style={{color: '#FFFFFF'}} /> : <ErrorOutline style={{color: '#FFFFFF'}} />}
        <AlertMessage>{message}</AlertMessage>
    </AlertContainer>
);

export default Alert;