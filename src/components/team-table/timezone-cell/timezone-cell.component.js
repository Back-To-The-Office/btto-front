import React from 'react';
import TableCell from '../table-cell/table-cell.component';
import {TimezoneCellWrapper} from './timezone-cell.styles';
import moment from 'moment-timezone';

const TimezoneCell = ({timezone}) => {
    return (
        <TableCell>
            <TimezoneCellWrapper>
                <p>UTC {moment.tz(timezone).format('Z')}</p>
            </TimezoneCellWrapper>
        </TableCell>
    )
}

export default TimezoneCell