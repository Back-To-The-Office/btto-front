import styled from 'styled-components';
import { BTTO_BLUE } from '../../../common-styles/vars';

export const CurrentTimeContainer = styled.div`
    position: absolute;
    width: 2px;
    border-left: 2px dashed ${BTTO_BLUE};
    height: 100%;
    z-index: 1000;
    left: ${props => `${props.currentTimeInPercent}%`};
`