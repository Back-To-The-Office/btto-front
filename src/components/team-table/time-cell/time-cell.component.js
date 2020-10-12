import React from 'react';
import {TimeCellWrapper, TimeCellFragment, WorkTime} from './time-cell.styles';
import TableCell from '../table-cell/table-cell.component';
import CurrentTime from '../current-time/current-time.component';
import {useDispatch, useSelector} from 'react-redux';
import {setUserWorkTime, clearUserWorkTime} from '../../../redux/worktime-display/worktime-display.actions';
import moment from 'moment-timezone';

const TeamTableTimeCell = ({mainUserTimezone, user, currentTimeInPercent}) => {
    let hoursInDay = [...Array(24).keys()];
    const mainUserOffset = -moment.tz(mainUserTimezone).utcOffset();
    const userOffset = moment.tz(user.timezone).utcOffset();
    const timezoneOffset = (mainUserOffset + userOffset) / 60;
    const offsetTime = hoursInDay.splice(timezoneOffset).concat(hoursInDay);

    const pickedUser = useSelector(state => state.worktimeDisplay),
          dispatch = useDispatch();
    const { pickedWorkTime, pickedTimezone } = pickedUser;

    const mouseDown = () => dispatch(setUserWorkTime(user.workTime, user.timezone));
    const mouseUp = () => dispatch(clearUserWorkTime());

    return (
        <TableCell onMouseDown={mouseDown} onMouseUp={mouseUp}>
            <CurrentTime currentTimeInPercent={currentTimeInPercent} />
            <TimeCellWrapper>
                {offsetTime.map(time => {
                    const timeInUserZone = moment(new Date()).tz(user.timezone);
                    timeInUserZone.hour(time)
                    return (
                        <TimeCellFragment isPickedTime={pickedWorkTime.length ? checkTimeIsWorkTime(timeInUserZone.tz(pickedTimezone).hour(), pickedWorkTime) : true}>
                            <p>{time}</p>
                            <WorkTime isWorkTime={checkTimeIsWorkTime(time, user.workTime)} />
                        </TimeCellFragment>
                    )
                })}
            </TimeCellWrapper>
        </TableCell>
    )
}

const checkTimeIsWorkTime = (time, workTime) => {
    for (let workPeriod of workTime) {
        if (time >= workPeriod[0] && time <= workPeriod[1]) {
            return true;
        }
    }
    return false;
}

export default TeamTableTimeCell