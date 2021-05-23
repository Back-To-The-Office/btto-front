import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { DepartmentInterface } from '../../../../../interfaces/department';
import DepartmentController from '../../../../../controllers/Department/departmentController';
import UserController from '../../../../../controllers/User/userController';
import { ControlContainer, ControlButtons } from '../styles';

interface ParticipantControlProps {
    pickedDepartment: DepartmentInterface | undefined
};

const ParticipantControl: React.FC<ParticipantControlProps> = ({ pickedDepartment }) => {
    const [participantEmail, setParticipantEmail] = React.useState(``);

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setParticipantEmail(target.value);
    };

    const onAddParticipant = async (): Promise<void> => {
        // try {
        //     await DepartmentController.addParticipant(pickedDepartment?.id, )
        // }
    };

    return <ControlContainer>
        <h1>Change participants</h1>
        <TextField
            value={participantEmail}
            label="Participant Name"
            onChange={onChange}
            variant="outlined"
            disabled={!pickedDepartment}
        />
        <ControlButtons>
            <Button
                variant="outlined"
                disabled={!participantEmail || !pickedDepartment}
                onClick={onCreateDepartment}
            >
                Add participant
            </Button>
            <Button
                variant="outlined"
                disabled={!departmentDame && !pickedDepartment}
                onClick={onEditDepartment}
            >
                Remove participant
            </Button>
        </ControlButtons>
    </ControlContainer>;
};

export default ParticipantControl;
