import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { DepartmentInterface } from '../../../../../interfaces/department';
import DepartmentController from '../../../../../controllers/Department/departmentController';
import { ControlContainer, ControlButtons } from '../styles';

interface NameControlProps {
    pickedDepartment: DepartmentInterface | undefined
}

const NameControl: React.FC<NameControlProps> = ({ pickedDepartment }) => {
    const [departmentDame, setDepartmentName] = React.useState(pickedDepartment?.name || ``);

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setDepartmentName(target.value);
    };

    const onCreateDepartment = async (): Promise<void> => {
        try {
            await DepartmentController.create(departmentDame);
        } catch (error) {
            console.log(error);
        }
    };

    const onEditDepartment = async (): Promise<void> => {
        if (!pickedDepartment) {
            return;
        };

        try {
            await DepartmentController.edit(pickedDepartment.id, departmentDame);
        } catch (error) {
            console.log(error);
        }
    };

    return <ControlContainer>
        <h1>Edit department</h1>
        <TextField
            value={departmentDame}
            label="Department name"
            onChange={onChange}
            variant="outlined"
        />
        <ControlButtons>
            <Button
                variant="outlined"
                disabled={!departmentDame}
                onClick={onCreateDepartment}
            >
                Create department
            </Button>
            <Button
                variant="outlined"
                disabled={!departmentDame || !pickedDepartment}
                onClick={onEditDepartment}
            >
                Edit department
            </Button>
        </ControlButtons>
    </ControlContainer>;
};

export default NameControl;
