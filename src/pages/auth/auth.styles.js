import styled from 'styled-components';
import { SectionHeader } from '../../common-styles/headers/headers.styles';

export const AuthSection = styled.section`
    padding: 80px 0;
    @media screen and (max-width: 960px) {
        padding-top: 20px;
    }
`;

export const AuthContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 160px;
    @media screen and (max-width: 1280px) {
        padding: 0 80px;
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const AuthContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 310px;
    padding-right: 20px;
    order: 1;
    @media screen and (max-width: 960px) {
        order: 2;
    }
`;

export const AuthSectionHeader = styled(SectionHeader)`
    margin-bottom: 56px;
    font-size: 3rem;
    font-weight: normal;
`;

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const AuthContentRight = styled.div`
    width: 57%;
    display: flex;
    justify-content: flex-end;
    order: 2;
    min-width: 340px;
    @media screen and (max-width: 960px) {
        order: 1;
        max-width: 400px;
        width: 100%;
    }
`;