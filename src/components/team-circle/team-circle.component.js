import React from 'react';
import { TeamCircleContent, Circle, CircleItem, CircleInner } from './team-circle.styles';
import UserAvatar from '../UI/user-avatar/user-avatar.component';

const getUserDegree = (numbersOfItems, indexOfItem) => 360 / numbersOfItems * indexOfItem;

const TeamCircle = ( { users } ) => (
    <TeamCircleContent>
        <Circle>
            {users.map((user, index) => {
                const degree = getUserDegree(users.length, index);
                return (
                    <CircleItem key={user.id} degree={degree}>
                        <CircleInner degree={degree}>
                            <UserAvatar user={user} />
                        </CircleInner>
                    </CircleItem>
                )
            })}
        </Circle>
    </TeamCircleContent>
)

export default TeamCircle