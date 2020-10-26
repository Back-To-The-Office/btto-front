import styled, { css } from 'styled-components';
import { BTTO_LIGHT_GREY, BTTO_BLUE } from '../vars';

const descriptionText = css`
    color: ${BTTO_LIGHT_GREY};
    font-size: 16px;
    line-height: 1.5rem;
    margin-bottom: 30px;
`;

export const DescriptionText = styled.p`
    ${descriptionText};
`;

export const DescriptionTextCenter = styled(DescriptionText)`
    text-align: center;
`;

export const DescriptionTextLink = styled.a`
    ${descriptionText};
    color: ${BTTO_BLUE};
    &:hover {
        text-decoration: underline;
    }
`;