import React, {useState, useEffect} from 'react';
import {Table, TableHead, TableBody} from '@material-ui/core';
import TeamTableRow from '../row/row.component';

const getCurrentTimeInPercent = () => {
    const MINUTES_IN_DAY = 1440;
    const currentTime = new Date();
    const currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    return Math.round(currentTimeInMinutes * 100 / MINUTES_IN_DAY);
}

const TeamTable = ({user, usersObject}) => {
    const [currentTimeInPercent, setCurrentTime] = useState(0);
    useEffect(() => updateTime(), []);

    const updateTime = () => {
        setCurrentTime(getCurrentTimeInPercent())
        setTimeout(updateTime, 60000);
    }

    return (
        <Table size="small" stickyHeader={true}>
            <TableHead>
                <TeamTableRow 
                    user={user}
                    mainUserTimezone={user.timezone} 
                    currentTimeInPercent={currentTimeInPercent} 
                />
            </TableHead>
            <TableBody>
                {Object.keys(usersObject).map(member => (
                    <TeamTableRow 
                        key={member} 
                        currentTimeInPercent={currentTimeInPercent} 
                        user={usersObject[member]} 
                        mainUserTimezone={user.timezone} 
                    />
                ))}
            </TableBody>
        </Table>
    )
}

export default TeamTable