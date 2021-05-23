import styled from 'styled-components';
import { BTTO_GREEN, BTTO_WHITE, ERROR } from '../../common-styles/vars';

interface AlertContainerProps {
    type: string
};

export const AlertContainer = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
    background-color: ${(props: AlertContainerProps) => props.type === 'error' ? ERROR : BTTO_GREEN};
`;

export const AlertMessage = styled.p`
    margin-left: 20px;
    font-size: 14px;
    color: ${BTTO_WHITE};
`;
