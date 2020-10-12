import React, {useState} from 'react';
import {FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton, FormHelperText} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';

const PasswordField = ({label, isValid, isTouched, validation, value, handleChange, errorMessage}) => {
    const [isDisplay, toggleDisplay] = useState(false);
    return (
        <FormControl error={!isValid && isTouched} variant='outlined'>
            <InputLabel required={validation.isRequired} htmlFor='password-field'>{label}</InputLabel>
            <OutlinedInput
                label={`${label} *`}
                id='password-field'
                type={isDisplay ? 'text' : 'password'}
                value={value}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visivility'
                            onClick={() => toggleDisplay(!isDisplay)}
                        >
                            {isDisplay ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>{isValid || !isTouched ? '' : errorMessage}</FormHelperText>
        </FormControl>
    )
}

export default PasswordField