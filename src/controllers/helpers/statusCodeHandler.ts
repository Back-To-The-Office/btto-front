import statusCodeEnum from '../enums/statusCodeEnum';
import { AxiosResponse } from 'axios';

const handleResponseStatusCode = (response : AxiosResponse) : void | Error => {
    if (response.statusText === `OK`) {
        return;
    }

    throw new Error(statusCodeEnum[response.status]);
};

export default handleResponseStatusCode;