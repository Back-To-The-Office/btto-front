import styled from 'styled-components';

export const TeamCircleContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px auto 350px;
`

export const Circle = styled.div`
    margin-left: -100px;
    position: relative;
`

export const CircleItem = styled.div`
    position: absolute;
    top: 0;
    height: 150px;
    width: 150px;
    transform: rotate(${props => Math.round(props.degree)}deg) translateX(-${props => props.radius}px);
`

export const CircleInner = styled.div`
    transform: rotate(-${props => Math.round(props.degree)}deg);
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`