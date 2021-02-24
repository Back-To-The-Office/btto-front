export interface CreateDepartmentDataRequest {
    name: string
};

export interface CreateDepartmentDataResponse {
    id: number
};

export interface EditDepartmentDataRequest {
    name: string
};

export interface DepartmentInterface {
    id: number,
    companyId: number,
    name: string,
    ownerId: number,
    participantsIds: Array<number>
};

export interface EditParticipantDataRequest {
    participantId: number
}