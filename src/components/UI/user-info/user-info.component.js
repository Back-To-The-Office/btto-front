import React from 'react';
import PropTypes from 'prop-types';
import { AvatarWrapper } from '../../../common-styles/wrappers/wrappers.styles';
import { UserHeader, UserSubHeader } from '../../../common-styles/headers/headers.styles';
import UserAvatar from '../user-avatar/user-avatar.component';

const UserInfo = ({ user }) => {
    const { name, role, img, isOnline } = user;
    return (
        <AvatarWrapper>
            <UserAvatar src={img} isOnline={isOnline} />
            <UserHeader>{name}</UserHeader>
            <UserSubHeader>{role}</UserSubHeader>
        </AvatarWrapper>
    );
};

UserInfo.propTypes = {
    user: PropTypes.object
};

export default UserInfo;
