import React from 'react';
import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
import { } from '../UI/user-avatar/user-avatar.component';
import { UserCardContainer } from './user-card.styles';

const useStyles = makeStyles({
    dialog: {
        maxWidth: 'auto'
    }
});

const UserCard = () => {
    const classes = useStyles();

    return (
        <Dialog className={classes.dialog} open={true}>
            <UserCardContainer>
                
            </UserCardContainer>
        </Dialog>
    )
}

export default UserCard;