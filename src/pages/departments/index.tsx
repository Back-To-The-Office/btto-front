import React from 'react';
import {
    Button, Radio, RadioGroup, FormControlLabel
} from '@material-ui/core';
import { DepartmentsContainer, DepartmentsControlsSection, DepartmentsListSection } from './Department.styles';
import DepartmentControl from './components/DepartmentControl/DepartmentControl';
import DepartmentController from '../../controllers/Department/departmentController';

const teamsExample = [
    {
        name: `Development`,
        id: 14214
    },
    {
        name: `Biz`,
        id: 12412
    },
    {
        name: `Design`,
        id: 4124124
    }
]

const Departments = () => {
    const [teams, updateDepartments] = React.useState([]);
    const [pickedDepartment, pickDepartment] = React.useState(null);
    const [departmentName, changeName] = React.useState(``);
    const [participantEmail, changeParticipantEmail] = React.useState(``);

    React.useEffect(() => {
        DepartmentController.getAllDepartments()
            .then(departments => updateDepartments(departments));
    })

    const onCreateDepartment = async () => {
        try {
            await DepartmentController.create(departmentName);
        } catch (error) {
            console.log(error);
        }
    };

    const onEditDepartment = async () => {
        try {
            await DepartmentController.edit(pickedDepartment.id, departmentName);
        } catch (error) {
            console.log(error);
        }
    };


    return <DepartmentsContainer>
        <DepartmentsControlsSection>
            <DepartmentControl
                value={departmentName}
                label={`Department name`}
                name={`Edit department`}
                onChange={event => changeName(event.target.value)}
            >
                <Button
                variant="outlined"
                disabled={!!!departmentName}
                onClick={onCreateDepartment}
                >
                    Create department
                </Button>
                <Button
                    variant="outlined"
                    disabled={!!!departmentName}
                    onClick={onEditDepartment}
                >
                    Edit department
                </Button>
            </DepartmentControl>
            <DepartmentControl
                value={participantEmail}
                label="Participant Name"
                name={`Change participant`}
                onChange={event => changeParticipantEmail(event.target.value)}
            >
                <Button
                    variant="outlined"
                    disabled={!!!participantEmail}
                >
                    Add participant
                </Button>
                <Button
                    variant="outlined"
                    disabled={!!!participantEmail}
                >
                    Remove participant
                </Button>
            </DepartmentControl>
        </DepartmentsControlsSection>
        <DepartmentsListSection>
            <RadioGroup name="pickedDepartment" value={pickedDepartment} onChange={event => pickDepartment(event.target.value)}>
                {teamsExample.map(team => <FormControlLabel value={team.id} control={<Radio />} label={team.name} />)}
            </RadioGroup>
        </DepartmentsListSection>
    </DepartmentsContainer>;
};

export default Departments;
