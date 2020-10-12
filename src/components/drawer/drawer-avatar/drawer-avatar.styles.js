import styled from 'styled-components';
import { BTTO_WHITE } from '../../../common-styles/vars';
import { UserHeader, UserSubHeader } from '../../../common-styles/headers/headers.styles';

export const DrawerUserHeader = styled(UserHeader)`
    font-size: 1.25rem;
    margin: 8px 0;
    color: ${BTTO_WHITE};
`;

export const DrawerUserSubHeader = styled(UserSubHeader)`
    color: ${BTTO_WHITE};
`;