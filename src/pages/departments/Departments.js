import React from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import DepartmentController from '../../controllers/Department/departmentController';

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

    return <div>
        <div>
            <h1>Edit team</h1>
            <TextField
                value={departmentName}
                label="Team name"
                required
                variant="outlined"
                onChange={event => changeName(event.target.value)}
            />
            <Button
                variant="outlined"
                disabled={!!!departmentName}
                onClick={onCreateDepartment}
            >
                Create team
            </Button>
            <Button
                variant="outlined"
                disabled={!!!departmentName}
                onClick={onEditDepartment}
            >
                Edit team
            </Button>
        </div>
        <div>
            <h1>Pick Team</h1>
            <RadioGroup name="pickedDepartment" value={pickedDepartment} onChange={event => pickDepartment(event.target.value)}>
                {teams.map(team => <FormControlLabel value={team.id} control={<Radio />} label={team.name} />)}
            </RadioGroup>
        </div>
        <div>
            <h1>Change participants</h1>
            <TextField
                value={participantEmail}
                label="Participant Name"
                required
                variant="outlined"
                onChange={event => changeParticipantEmail(event.target.value)}
            />
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
        </div>
    </div>;
};

export default Departments;
