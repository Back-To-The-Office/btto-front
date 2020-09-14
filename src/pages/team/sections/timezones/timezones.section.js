import React from 'react';
import TeamTable from '../../../../components/team-table/table/table.component';
import { useSelector } from 'react-redux';
import { TimezonesContent } from './timezones.styles';
import { SectionHeader } from '../../../../common-styles/headers/headers.styles';

const removeMainUserFromUsersObject = (user, members) => {
    const usersObjectDeepCopy = JSON.parse(JSON.stringify(members))
    delete usersObjectDeepCopy[user.id]
    return usersObjectDeepCopy
}

const Timezones = ( { usersObject } ) => {
    const user = useSelector(state => state.auth.user);
    return (
        <TimezonesContent>
            <SectionHeader>Time Zones and Work Hours</SectionHeader>
            <TeamTable user={user} usersObject={removeMainUserFromUsersObject(user, usersObject)} />
        </TimezonesContent>
    )
}

export default Timezones