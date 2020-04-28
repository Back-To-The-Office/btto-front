import styled from 'styled-components';
import { BTTO_GREEN, BTTO_LIGHTER_GREY } from '../../../common-styles/vars';

export const TimeCellWrapper = styled.div`
    display: flex;
`

export const TimeCellFragment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`

export const WorkTime = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${props => props.isWorkTime ? BTTO_GREEN : BTTO_LIGHTER_GREY};
`