import React from 'react';
import { TimeCellWrapper, TimeCellFragment, WorkTime } from './time-cell.styles';
import TableCell from '../table-cell/table-cell.component';

const checkTimeIsWorkTime = (time, workTime) => {
    for (let workPeriod of workTime) {
        if (time >= workPeriod[0] && time <= workPeriod[1]) {
            return true;
        }
    }
    return false;
}

const TeamTableTimeCell = ( { offsetTime, workTime } ) => {
    return (
        <TableCell>
            <TimeCellWrapper>
                {offsetTime.map(time => (
                    <TimeCellFragment key={time}>
                        <p>{time}</p>
                        <WorkTime isWorkTime={checkTimeIsWorkTime(time, workTime)} />
                    </TimeCellFragment>
                ))}
            </TimeCellWrapper>
        </TableCell>
    )
}

export default TeamTableTimeCell