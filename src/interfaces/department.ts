export interface DepartmentInterface {
    id: number,
    companyId: number,
    name: string,
    ownerId: number,
    participantsIds: Array<number>
};