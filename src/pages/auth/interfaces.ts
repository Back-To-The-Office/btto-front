interface ValidationRules {
    isRequired?: boolean,
    isEmail?: boolean,
    isPassword?: boolean
};

export interface FieldData {
    type: string,
    value: string,
    label: string,
    isTouched: boolean,
    isValid: boolean,
    placeholder: string,
    errorMessage: string,
    validation: ValidationRules,
};

export interface FieldProperties {
    type: FieldData["type"],
    value: FieldData["value"],
    placeholder: FieldData["placeholder"],
    label: FieldData["label"],
    required: FieldData["validation"]["isRequired"],
    error: boolean,
    helperText: string,
    variant: string
};

export interface RegistrationModel {
    firstName: FieldData,
    lastName: FieldData,
    position: FieldData,
    email: FieldData,
    password: FieldData
};

export interface LoginModel {
    email: FieldData,
    password: FieldData
}

export type RegistrationModelKeys = keyof RegistrationModel;

export type LoginModelKeys = keyof LoginModel;
