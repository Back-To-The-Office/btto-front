import React from 'react';
import { Dialog, List, ListItem, Button, DialogTitle, makeStyles } from '@material-ui/core';
import DrawerLink from '../drawer-link/drawer-link.component';
import { BTTO_BLUE, BTTO_WHITE } from '../../../common-styles/vars';
import clsx from 'clsx';

const useStyles = makeStyles({
    paper: {
        backgroundColor: BTTO_BLUE,
        maxWidth: 600,
        width: '100%'
    },
    dialogTitle: {
        color: BTTO_WHITE
    }
})

const TeamsPopup = ( { teamsList, popupIsOpen, closePopup } ) => {
    const classes = useStyles();
    return (
        <Dialog 
            classes={{
                paper: clsx(classes.paper)
            }} 
            onClose={closePopup} 
            open={popupIsOpen}
        >
            <DialogTitle className={classes.dialogTitle}>Choose your team</DialogTitle>
            <List>
                {teamsList.map((team, index) => <ListItem key={index}><DrawerLink address={`/workspace/team/${team.id}/${team.name.toLowerCase()}`}  action={closePopup} text={team.name} /></ListItem>)}
            </List>
            <Button variant="contained" onClick={closePopup}>Close</Button>
        </Dialog>
    )
}

export default TeamsPopup;