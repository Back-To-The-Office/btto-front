import React from 'react';
import { Table, TableHead, TableBody } from '@material-ui/core';
import TeamTableRow from '../row/row.component';

const TeamTable = ( { mainUser, otherUsers } ) => {
    const { timezone } = mainUser;
    return (
        <Table size="small" stickyHeader={true}>
            <TableHead>
                <TeamTableRow user={mainUser} mainUserTimezone={timezone} />
            </TableHead>
            <TableBody>
                {otherUsers.map((user, index) => <TeamTableRow key={index} user={user} mainUserTimezone={timezone} />)}
            </TableBody>
        </Table>
    )
}

export default TeamTable