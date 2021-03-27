import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { DepartmentControlContainer, DepartmentControlButtons } from './DepartmentControl.styles';

const DepartmentControl = ({ name, value, label, onChange, children }) => {
    return <DepartmentControlContainer>
        <h1>{name}</h1>
        <TextField
            value={value}
            label={label}
            onChange={onChange}
            variant={`outlined`}
        />
        <DepartmentControlButtons>
            {children}
        </DepartmentControlButtons>
    </DepartmentControlContainer>;
};

DepartmentControl.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

export default DepartmentControl;