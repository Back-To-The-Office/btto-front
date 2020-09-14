import React from 'react';
import {TableRow} from '@material-ui/core';
import UserCell from '../user-cell/user-cell.component';
import TimeCell from '../time-cell/time-cell.component';
import TimezoneCell from '../timezone-cell/timezone-cell.component';

const TeamTableRow = ( { user, mainUserTimezone, currentTimeInPercent } ) => {
    // const { timezone, workTime } = user;
    // const timezoneOffset = -(mainUserTimezone - timezone) / 60;
    // let time = [...Array(24).keys()];
    // const offsetTime = time.splice(-timezoneOffset).concat(time);
    return (
        <TableRow>
            <UserCell user={user} />
            {/* <TimeCell offsetTime={offsetTime} workTime={workTime} offset={timezone / 60} currentTimeInPercent={currentTimeInPercent} /> */}
            <TimeCell mainUserTimezone={mainUserTimezone} user={user} currentTimeInPercent={currentTimeInPercent} />
            <TimezoneCell timezone={user.timezone} />
        </TableRow>
    )
}

export default TeamTableRow