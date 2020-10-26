import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px;
    @media screen and (max-width: 1280px) {
        padding: 0 30px;
    }
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;