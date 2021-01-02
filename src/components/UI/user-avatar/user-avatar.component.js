import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';
import StyledBadge from '../styled-badge/styled-badge.component';

const useStyles = makeStyles({
    default: {
        width: 70,
        height: 70
    }
})

const UserAvatar = ({ src, isOnline, className = {} }) => {
    const classes = useStyles();

    return (
        <StyledBadge
            invisible={!isOnline}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            overlap='circle'
        >
            <Avatar src={src} className={clsx(classes.default, className)} />
        </StyledBadge>
    );
};

UserAvatar.propTypes = {
    src: PropTypes.string,
    isOnline: PropTypes.bool,
    className: PropTypes.object
} 

export default UserAvatar;