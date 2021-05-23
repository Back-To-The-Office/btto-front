import { FieldProperties, FieldData } from '../interfaces';

export const mapFieldProperties = (field: FieldData): FieldProperties => {
    const { type, value, placeholder, validation, isValid, isTouched, label, errorMessage } = field;
    return {
        type,
        value,
        placeholder,
        label,
        required: validation.isRequired,
        error: !isValid && isTouched,
        helperText: isValid || !isTouched ? '' : errorMessage,
        variant: 'outlined'
    }
}