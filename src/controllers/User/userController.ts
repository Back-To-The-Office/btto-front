import { AxiosResponse } from 'axios';
import Api from '../Api/ApiController';
import {
    User, CreateUserData, CreateUserDataResponse, EditUserData
} from './interfaces/interfaces';

interface UserControllerInterface {
    getUser(id: number): Promise<User>,
    deleteUser(id: number): Promise<void>,
    createUser(data: CreateUserData): Promise<CreateUserDataResponse>,
    getCurrentUser(): Promise<User>,
    editUserData(data: EditUserData): Promise<User>,
};

class UserController extends Api implements UserControllerInterface {
    getUser = async (id: number): Promise<User> => {
        const url: string = `/api/v1/users/${id}`;

        const response: AxiosResponse<User> = await this.get(url);

        return response.data
    }

    deleteUser = async (id: number): Promise<void> => {
        const url: string = `/api/v1/users/${id}`;

        await this.delete(url);
    }

    createUser = async (data: CreateUserData): Promise<CreateUserDataResponse> => {
        const url: string = `/api/v1/users/create`;

        const response: AxiosResponse<User> = await this.post(url, data);

        return response.data
    }

    getCurrentUser = async (): Promise<User> => {
        const url = `/api/v1/users/current`;

        const response: AxiosResponse<User> = await this.get(url);

        return response.data;
    }

    editUserData = async (data: EditUserData): Promise<User> => {
        const url = `/api/v1/users/current`;

        const response: AxiosResponse<User> = await this.post(url, data);

        return response.data;
    }
};

export default new UserController();
