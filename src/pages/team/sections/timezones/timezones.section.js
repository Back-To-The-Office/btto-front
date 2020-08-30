import React from 'react';
import TeamTable from '../../../../components/team-table/table/table.component';
import { useSelector } from 'react-redux';
import { TimezonesContent } from './timezones.styles';
import { SectionHeader } from '../../../../common-styles/headers/headers.styles';

const removeUser = (user, members) => {
    delete members[user.id]
    return members
}

const Timezones = ( { members } ) => {
    const user = useSelector(state => state.auth.user);
    const teamMembersCopy = JSON.parse(JSON.stringify(members))
    return (
        <TimezonesContent>
            <SectionHeader>Time Zones and Work Hours</SectionHeader>
            <TeamTable user={user} members={removeUser(user, teamMembersCopy)} />
        </TimezonesContent>
    )
}

export default Timezones