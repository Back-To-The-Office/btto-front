import React from 'react';
import { TimeCellWrapper, TimeCellFragment, WorkTime } from './time-cell.styles';
import TableCell from '../table-cell/table-cell.component';
import CurrentTime from '../current-time/current-time.component';
import { useDispatch, useSelector } from 'react-redux';
import { pickUser } from '../../../redux/worktime-display/worktime-display.actions';

const checkTimeIsWorkTime = (time, workTime) => {
    if (time > 23) {
        time = time % 24
    } else if (time < 0) {
        time = 24 + time 
    }
    for (let workPeriod of workTime) {
        if (time >= workPeriod[0] && time <= workPeriod[1]) {
            return true;
        }
    }
    return false;
}

const TeamTableTimeCell = ( { offsetTime, workTime, offset, currentTimeInPercent } ) => {
    const pickedUser = useSelector(state => state.worktimeDisplay),
          dispatch = useDispatch(),
          normalTime = [...Array(24).keys()];
    const { pickedWorkTime, pickedTimezone } = pickedUser;
    return (
        <TableCell onClick={() => dispatch(pickUser({
            pickedWorkTime: workTime,
            pickedTimezone: offset
        }))}>
            <CurrentTime currentTimeInPercent={currentTimeInPercent} />
            <TimeCellWrapper>
                {offsetTime.map(time => { 
                    const offsetIndex = -(pickedTimezone - offset);
                    return (
                        <TimeCellFragment isPickedTime={pickedWorkTime.length ? checkTimeIsWorkTime(normalTime[time] + offsetIndex, pickedWorkTime) : true} key={time}>
                            <p>{time}</p>
                            <WorkTime isWorkTime={checkTimeIsWorkTime(time, workTime)} />
                        </TimeCellFragment>
                    )
                })}
            </TimeCellWrapper>
        </TableCell>
    )
}

export default TeamTableTimeCell