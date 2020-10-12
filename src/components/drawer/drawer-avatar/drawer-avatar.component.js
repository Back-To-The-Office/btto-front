import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import StyledBadge from '../../UI/styled-badge/styled-badge.component';
import { AvatarWrapper } from '../../../common-styles/wrappers/wrappers.styles';
import { DrawerUserHeader, DrawerUserSubHeader } from './drawer-avatar.styles';

const useStyles = makeStyles({
    root: {
        width: 90,
        height: 90
    },
    rootSmall: {
        width: 50,
        height: 50
    }
})

const DrawerAvatar = ( { user, isOpen } ) => {
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
                <Avatar src={img} className={isOpen ? classes.root : classes.rootSmall} />
            </StyledBadge>
            <DrawerUserHeader isOpen={isOpen}>{name}</DrawerUserHeader>
            <DrawerUserSubHeader isOpen={isOpen}>{role}</DrawerUserSubHeader>
        </AvatarWrapper>
    )
}

export default DrawerAvatar