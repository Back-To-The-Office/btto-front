import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import { BTTO_BLUE } from '../../../common-styles/vars';
import { DrawerContent } from './drawer.styles';
import DrawerAvatar from '../drawer-avatar/drawer-avatar.component';
import DrawerButton from '../drawer-button/drawer-button.component';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 280,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: 280,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1
        }
    },
    paper: {
        backgroundColor: BTTO_BLUE,
        width: 280
    }
}))

const DrawerComponent = ( { isOpen, user, toggleDrawer } ) => {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            open={isOpen}
            className={`${classes.drawer} ${isOpen ? classes.drawerOpen : classes.drawerClose}`}
            classes={{
                paper: classes.paper
            }}
        >
            <DrawerContent>
                <DrawerAvatar user={user} isOpen={isOpen} />
                <DrawerButton isOpen={isOpen} />
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent