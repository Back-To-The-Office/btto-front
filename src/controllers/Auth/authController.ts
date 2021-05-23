import axios, { AxiosResponse } from 'axios';
import handleResponseStatusCode from '../helpers/statusCodeHandler';
import AuthData from './interfaces/interfaces';

const {
    REACT_APP_PROTOCOL = ``, REACT_APP_BTTO_HOST = ``, REACT_APP_CLIENT_ID = ``, REACT_APP_CLIENT_SECRET = ``
} = process.env;

class AuthController {
    static PROTOCOL: string = REACT_APP_PROTOCOL;
    static BTTO_HOST: string = REACT_APP_BTTO_HOST;
    static CLIENT_ID: string = REACT_APP_CLIENT_ID;
    static CLIENT_SECRET: string = REACT_APP_CLIENT_SECRET;

    register = async (data: AuthData): Promise<void> => {
        const { PROTOCOL, BTTO_HOST } = AuthController;
        const url: string = `${PROTOCOL}${BTTO_HOST}/api/v1/users/register`;
        const response: AxiosResponse = await axios.post(url, data);

        handleResponseStatusCode(response);
    }

    login = async (data: URLSearchParams): Promise<AxiosResponse<any>> => {
        const { PROTOCOL, BTTO_HOST, CLIENT_ID, CLIENT_SECRET } = AuthController;
        const url: string = `${PROTOCOL}${CLIENT_ID}:${CLIENT_SECRET}@${BTTO_HOST}/oauth/token`;
        const response: AxiosResponse = await axios.post(url, data);

        handleResponseStatusCode(response);

        return response;
    }
};

export default new AuthController();