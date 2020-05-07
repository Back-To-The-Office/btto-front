import React from 'react';
import TeamTable from '../../../../components/team-table/table/table.component';
import { useSelector } from 'react-redux';
import { TimezonesContent } from './timezones.styles';
import { SectionHeader } from '../../../../common-styles/headers/headers.styles';

const removeMainUser = (mainUser, array) => {
    const mainUserIndex = array.findIndex(user => user.id === mainUser.id);
    if (mainUserIndex === -1) {
        return array
    } else {
        array.splice(mainUserIndex, 1);
        return array
    }
}

const Timezones = ( { users } ) => {
    const mainUser = useSelector(state => state.auth.user);
    return (
        <TimezonesContent>
            <SectionHeader>Time Zones and Work Hours</SectionHeader>
            <TeamTable mainUser={mainUser} otherUsers={removeMainUser(mainUser, users)} />
        </TimezonesContent>
    )
}

export default Timezones