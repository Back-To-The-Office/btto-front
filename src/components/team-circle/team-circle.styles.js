import styled from 'styled-components';

export const TeamCircleContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 400px auto;
`

export const Circle = styled.div`
    position: relative;
`

export const CircleItem = styled.div`
    position: absolute;
    top: 0;
    height: 150px;
    width: 150px;
    transform: rotate(${props => Math.round(props.degree)}deg) translateX(-180px);
`

export const CircleInner = styled.div`
    transform: rotate(-${props => Math.round(props.degree)}deg);
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`