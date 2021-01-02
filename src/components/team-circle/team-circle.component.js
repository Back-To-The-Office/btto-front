import React from 'react';
import { TeamCircleContent, Circle, CircleItem, CircleInner } from './team-circle.styles';
import UserInfo from '../UI/user-info/user-info.component';

const getUserDegree = (numbersOfItems, indexOfItem) => 360 / numbersOfItems * indexOfItem;

const TeamCircle = ( { members } ) => (
    <TeamCircleContent>
        <Circle>
            {Object.keys(members).map((member, index) => {
                const degree = getUserDegree(Object.keys(members).length, index);
                return (
                    <CircleItem key={members[member].id} degree={degree} radius={Object.keys(members).length * 25}>
                        <CircleInner degree={degree}>
                            <UserInfo user={members[member]} />
                        </CircleInner>
                    </CircleItem>
                )
            })}
        </Circle>
    </TeamCircleContent>
)

export default TeamCircle