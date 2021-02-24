import axios from 'axios';
import handleResponseStatusCode from '../helpers/statusCodeHandler';
import { AxiosResponse } from 'axios';

const {
    REACT_APP_PROTOCOL = ``, REACT_APP_BTTO_HOST = ``
} = process.env;

interface HeaderInterface {
    Authorization: string
};

interface ApiInterface {
    userToken: string | null,
    headers: HeaderInterface,
    init(): void,
    post<T>(requestUrl: string, data: T): Promise<AxiosResponse>,
    delete(requestUrl: string): Promise<AxiosResponse>
};

class Api implements ApiInterface {
    static PROTOCOL: string = REACT_APP_PROTOCOL;
    static BTTO_HOST: string = REACT_APP_BTTO_HOST;
    userToken: string | null = null;
    headers: HeaderInterface = {
        Authorization: `Bearer ${this.userToken}`
    };

    init = (): void => {
        this.userToken = localStorage.getItem(`token`);
        this.headers = {
            Authorization: `Bearer ${this.userToken}`
        };
    }

    post = async <T = any>(requestUrl: string, data: T): Promise<AxiosResponse<any>> => {
        const url: string = `${Api.PROTOCOL}${Api.BTTO_HOST}/${requestUrl}`;
        const response: AxiosResponse = await axios.post(url, data, { headers: this.headers });

        handleResponseStatusCode(response);

        return response;
    }

    get = async (requestUrl: string): Promise<AxiosResponse<any>> => {
        const url: string = `${Api.PROTOCOL}${Api.BTTO_HOST}/${requestUrl}`;
        const response: AxiosResponse = await axios.get(url, { headers: this.headers });

        handleResponseStatusCode(response);

        return response;
    }

    delete = async (requestUrl: string): Promise<AxiosResponse<any>> => {
        const url: string = `${Api.PROTOCOL}${Api.BTTO_HOST}/${requestUrl}`;
        const response: AxiosResponse = await axios.delete(url, { headers: this.headers });

        handleResponseStatusCode(response);

        return response;
    }
}

export default Api;