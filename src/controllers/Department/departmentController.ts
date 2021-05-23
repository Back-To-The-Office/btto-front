import { AxiosResponse } from 'axios';
import Api from '../Api/ApiController';
import {
    CreateDepartmentDataRequest, CreateDepartmentDataResponse, EditDepartmentDataRequest, EditParticipantDataRequest
} from './interfaces/interfaces';
import { DepartmentInterface } from '../../interfaces/department';

interface DepartmentsControllerInterface {
    create(name: string): Promise<CreateDepartmentDataResponse>,
    edit(id: number, name: string): Promise<DepartmentInterface>,
    deleteDepartment(id: number): Promise<void>,
    getDepartment(id: number): Promise<DepartmentInterface>,
    getAllDepartments(): Promise<Array<DepartmentInterface>>,
    addParticipant(departmentId: number, participantId: number): Promise<void>,
    removeParticipant(departmentId: number, participantId: number): Promise<void>
}

class DepartmentsController extends Api implements DepartmentsControllerInterface {
    create = async (name: string): Promise<CreateDepartmentDataResponse> => {
        const url: string = `/api/v1/departments/create`;
        const data: CreateDepartmentDataRequest = { name };

        const response: AxiosResponse<CreateDepartmentDataResponse> = await this.post(url, data);

        return response.data
    }

    edit = async (id: number, name: string): Promise<DepartmentInterface> => {
        const url: string = `/api/v1/departments/edit/${id}`;
        const data: EditDepartmentDataRequest = { name };

        const response: AxiosResponse<DepartmentInterface> = await this.post(url, data);

        return response.data;
    }

    deleteDepartment = async (id: number): Promise<void> => {
        const url: string = `/api/v1/departments/${id}`;

        await this.delete(url);
    }

    getDepartment = async (id: number): Promise<DepartmentInterface> => {
        const url = `/api/v1/departments/${id}`;

        const response: AxiosResponse<DepartmentInterface> = await this.get(url);

        return response.data;
    }

    getAllDepartments = async (): Promise<Array<DepartmentInterface>> => {
        const url = `/api/v1/departments/`;

        const response: AxiosResponse<Array<DepartmentInterface>> = await this.get(url);

        return response.data;
    }

    addParticipant = async (departmentId: number, participantId: number): Promise<void> => {
        const url = `/api/v1/departments/${departmentId}/add/`;
        const data: EditParticipantDataRequest = { participantId };

        await this.post(url, data);
    }

    removeParticipant = async (departmentId: number, participantId: number): Promise<void> => {
        const url = `/api/v1/departments/${departmentId}/remove/`;
        const data: EditParticipantDataRequest = { participantId };

        await this.post(url, data);
    }
};

export default new DepartmentsController();