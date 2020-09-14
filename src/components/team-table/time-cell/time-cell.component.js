import React from 'react';
import {TimeCellWrapper, TimeCellFragment, WorkTime} from './time-cell.styles';
import TableCell from '../table-cell/table-cell.component';
import CurrentTime from '../current-time/current-time.component';
import {useDispatch, useSelector} from 'react-redux';
import {pickUser, setU} from '../../../redux/worktime-display/worktime-display.actions';
import moment from 'moment-timezone';

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

// const TeamTableTimeCell = ( { offsetTime, workTime, offset, currentTimeInPercent } ) => {
//     const pickedUser = useSelector(state => state.worktimeDisplay),
//           dispatch = useDispatch(),
//           normalTime = [...Array(24).keys()];
//     const { pickedWorkTime, pickedTimezone } = pickedUser;
//     return (
//         <TableCell onClick={() => dispatch(pickUser({
//             pickedWorkTime: workTime,
//             pickedTimezone: offset
//         }))}>
//             <CurrentTime currentTimeInPercent={currentTimeInPercent} />
//             <TimeCellWrapper>
//                 {offsetTime.map(time => { 
//                     const offsetIndex = -(pickedTimezone - offset);
//                     return (
//                         <TimeCellFragment isPickedTime={pickedWorkTime.length ? checkTimeIsWorkTime(normalTime[time] + offsetIndex, pickedWorkTime) : true} key={time}>
//                             <p>{time}</p>
//                             <WorkTime isWorkTime={checkTimeIsWorkTime(time, workTime)} />
//                         </TimeCellFragment>
//                     )
//                 })}
//             </TimeCellWrapper>
//         </TableCell>
//     )
// }

const TeamTableTimeCell = ({mainUserTimezone, user, currentTimeInPercent}) => {
    // const offsetRelativeToMainUser = (-moment.tz.zone(mainUserTimezone) - moment.tz.zone(user.timezone)) / 60;
    const mainUserZone = moment.tz.zone(mainUserTimezone);
    let hoursInDay = [...Array(24).keys()];
    // const offsetHoursInDay = hoursInDay.splice(-offsetRelativeToMainUser).concat(hoursInDay);

    const pickedUser = useSelector(state => state.worktimeDisplay),
          dispatch = useDispatch();
    const { pickedWorkTime, pickedTimezone } = pickedUser;

    const clickDown = () => dispatch(pickUser)

    return (
        <TableCell>
            <CurrentTime currentTimeInPercent={currentTimeInPercent} />
            <TimeCellWrapper>
                {hoursInDay.map(time => {
                    const data = new Date()
                    console.log(data)
                    data.setHours(time)
                    console.log(data)
                    console.log(moment.tz(data, user.timezone))
                    const timeInUserTimezone = moment.tz(new Date().setHours(time), user.timezone).tz(mainUserTimezone).hour()
                    console.log(timeInUserTimezone)
                    return (
                        <TimeCellFragment>
                            <p>{timeInUserTimezone}</p>
                            <WorkTime />
                        </TimeCellFragment>
                    )
                })}
            </TimeCellWrapper>
        </TableCell>
    )
}

export default TeamTableTimeCell