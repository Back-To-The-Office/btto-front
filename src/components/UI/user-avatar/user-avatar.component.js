import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import StyledBadge from '../styled-badge/styled-badge.component';
import { AvatarWrapper } from '../../../common-styles/wrappers/wrappers.styles';
import { UserHeader, UserSubHeader } from '../../../common-styles/headers/headers.styles';

const useStyles = makeStyles({
    root: {
        width: 70,
        height: 70
    }
})

const UserAvatar = ( { user } ) => {
    const { name, role, img, isOnline } = user;
    const classes = useStyles();
    return (
        <AvatarWrapper>
            <StyledBadge
                invisible={!isOnline}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                overlap='circle'
            >
                <Avatar src={img} className={classes.root} />
            </StyledBadge>
            <UserHeader>{name}</UserHeader>
            <UserSubHeader>{role}</UserSubHeader>
        </AvatarWrapper>
    )
}

export default UserAvatar