interface BaseUser {
    email: string,
    firstName: string,
    lastName: string,
    position: string,
    timezone: string
};

export interface User extends BaseUser {
    companyId: number,
    contacts: string,
    departmentsIds: Array<number>,
    id: number,
};

export interface CreateUserData extends BaseUser {
    password: string,
    role: string
};

export interface EditUserData {
    domainName: string,
    firstName: string,
    lastName: string,
    newPassword: string,
    oldPassword: string,
    passwordFieldValid: boolean,
    position: string,
    role: string,
    timezone: string
};

export interface CreateUserDataResponse {
    id: number
};
