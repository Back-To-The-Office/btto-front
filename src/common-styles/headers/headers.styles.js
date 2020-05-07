import styled from 'styled-components';
import { BTTO_GREY, BTTO_BLUE } from '../vars';

export const SectionHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    color: ${BTTO_GREY};
    line-height: 3.75rem;
    margin: 0 0 120px;
`

export const SectionSubHeader = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: ${BTTO_BLUE};
`

export const UserHeader = styled.h5`
    font-size: 1rem;
    font-weight: 500;
    margin: 4px 0;
    color: ${BTTO_GREY};
    line-height: 1.5rem;
`;

export const UserSubHeader = styled.h6`
    line-height: 1rem;
    font-size: 0.75rem;
    opacity: 0.8;
    font-weight: 400;
    color: ${BTTO_GREY};
`;