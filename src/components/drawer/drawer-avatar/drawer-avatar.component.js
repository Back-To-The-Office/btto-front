import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import UserAvatar from '../../UI/user-avatar/user-avatar.component';
import { AvatarWrapper } from '../../../common-styles/wrappers/wrappers.styles';
import { DrawerUserHeader, DrawerUserSubHeader } from './drawer-avatar.styles';

const useStyles = makeStyles({
    isOpen: {
        width: 90,
        height: 90
    },
    isMinimize: {
        width: 50,
        height: 50
    }
});

const DrawerAvatar = ( { user, isOpen } ) => {
    const { name, role, img, isOnline } = user;
    const classes = useStyles();
    return (
        <AvatarWrapper>
            <UserAvatar src={img} isOnline={isOnline} className={isOpen ? classes.isOpen : classes.isMinimize} />
            <DrawerUserHeader isOpen={isOpen}>{name}</DrawerUserHeader>
            <DrawerUserSubHeader isOpen={isOpen}>{role}</DrawerUserSubHeader>
        </AvatarWrapper>
    );
};

DrawerAvatar.propTypes = {
    user: PropTypes.object,
    isOpen: PropTypes.bool
};

export default DrawerAvatar;
