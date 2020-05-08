import styled, { css } from 'styled-components';
import { BTTO_GREEN, BTTO_LIGHTER_GREY } from '../../../common-styles/vars';

export const TimeCellWrapper = styled.div`
    display: flex;
    cursor: pointer;
`

export const TimeCellAfterElement = css`
    &::after {
        content: '';
        position: absolute;
        background-color: rgba(55, 71, 79, 0.5);
        width: 100%;
        height: 100%;
    }
`

export const TimeCellFragment = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding-bottom: 25px;
    ${props => !props.isPickedTime ? TimeCellAfterElement : ''}
`

export const WorkTime = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${props => props.isWorkTime ? BTTO_GREEN : BTTO_LIGHTER_GREY};
`