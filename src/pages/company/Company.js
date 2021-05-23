import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { post } from '../../helpers/addressHelper';

const CompanyPage = () => {
    const [companyName, changeName] = React.useState(``);
    const history = useHistory();

    const createCompany = async () => {
        const data = {
            name: companyName
        };

        try {
            const response = await post(`/api/v1/companies/create`, data);
            
            if (response.status !== 201) {
                throw new Error();
            }
            history.push(``)
        } catch (error) {
            console.log(error);
        }

    };

    return <React.Fragment>
        <h1>Company creation page</h1>
        <TextField
            value={companyName}
            label="Company name"
            required
            variant="outlined"
            onChange={event => changeName(event.value)}
        />
        <Button
            variant="outlined"
            disabled={!companyName}
            onClick={createCompany}
        >
            Create company
        </Button>
    </React.Fragment>;
}

export default CompanyPage;
