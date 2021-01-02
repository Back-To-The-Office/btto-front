import styled from 'styled-components';
import { BTTO_BLUE } from '../../common-styles/vars';

export const UserCardContainer = styled.div`
    width: 600px;
    height: 600px;
    box-sizing: border-box;
    display: flex;
`;

export const UserCardHeader = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
    background-color: ${BTTO_BLUE};
    align-items: center;
    justify-content: center;
`;

export const UserCardBody = styled.div`
    flex: 2 0 0;
`;
