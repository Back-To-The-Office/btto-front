import React from 'react';
import TableCell from '../table-cell/table-cell.component';
import { UserHeader, UserSubHeader } from '../../../common-styles/headers/headers.styles';
import { UserCellWrapper } from './user-cell.styles';

const UserCell = ( { user } ) => {
    const { name, geo } = user;
    return (
        <TableCell>
            <UserCellWrapper>
                <UserHeader>{name}</UserHeader>
                <UserSubHeader>{geo}</UserSubHeader>
            </UserCellWrapper>
        </TableCell>
    )
}

export default UserCell