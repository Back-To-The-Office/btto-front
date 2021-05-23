import React, { useState } from 'react';
import { FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, FormHelperText, makeStyles } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { FieldProperties } from '../../interfaces';

const useStyles = makeStyles({
    input: {
        maxWidth: 310,
        width: `100%`,
        marginBottom: 62
    }
});

type HandleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface PasswordFieldProps extends FieldProperties {
    handleChange: HandleChangeType,
    handleFocus: () => void,
    handleBlur: () => void,
};

const PasswordField: React.FC<PasswordFieldProps> = ({
    label, error, value, handleChange, handleFocus, handleBlur, helperText
}) => {
    const [isDisplay, toggleDisplay] = useState(false);
    const classes = useStyles();

    const onDisplayClick = (): void => {
        toggleDisplay(!isDisplay);
    };

    return <FormControl className={classes.input} error={error} variant='outlined'>
        <InputLabel required htmlFor='password-field'>{label}</InputLabel>
        <OutlinedInput
            label={`${label} *`}
            id='password-field'
            type={isDisplay ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                        aria-label='toggle password visibility'
                        onClick={onDisplayClick}
                    >
                        {isDisplay ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
        <FormHelperText>{error ? helperText : ''}</FormHelperText>
    </FormControl>;
};

export default PasswordField;
