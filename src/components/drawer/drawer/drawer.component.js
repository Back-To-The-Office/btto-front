import React, { useState } from 'react';
import clsx from 'clsx';
import { Drawer, makeStyles, List, ListItem } from '@material-ui/core';
import { ReactComponent as TeamIcon } from '../../../assets/drawer/team.svg';
import { ReactComponent as CompanyIcon } from '../../../assets/drawer/company.svg';
import ArrowIcon from '../../../assets/drawer/arrow.icon';
import { BTTO_BLUE } from '../../../common-styles/vars';
import { DrawerContent } from './drawer.styles';
import DrawerAvatar from '../drawer-avatar/drawer-avatar.component';
import DrawerButton from '../drawer-button/drawer-button.component';
import DrawerLink from '../drawer-link/drawer-link.component';
import DrawerTextButton from '../drawer-text-button/drawer-text-button.component';
import TeamsPopup from '../teams-popup/teams-popup.component';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 280,
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
            width: 150
        }
    },
    paper: {
        backgroundColor: BTTO_BLUE,
    }
}))

const DrawerComponent = () => {
    const [ isOpen, toggleDrawerState ] = useState(true);
    const [ popupIsOpen, togglePopupState ] = useState(false);
    const classes = useStyles();
    const user = useSelector(state => state.auth.user);
    const toggleDrawer = event => {
        event.preventDefault()
        toggleDrawerState(!isOpen);
    }

    const togglePopup = () => {
        togglePopupState(!popupIsOpen);
    }

    const clickLink = event => {
        event.preventDefault();
        togglePopup();
    }

    return (
        <Drawer
            variant="permanent"
            open={isOpen}
            className={clsx(
                classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen
            })}
            classes={{
                paper: clsx(
                    classes.paper, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen
                }),
            }}
        >
            <DrawerContent>
                <DrawerAvatar user={user} isOpen={isOpen} />
                <DrawerButton isOpen={isOpen} />
                <List>
                    <ListItem>
                        <DrawerLink address={user.teams.length > 1 ? `/workspace/team/` : `/workspace/team/${user.teams[0].id}/${user.teams[0].name.toLowerCase()}`} isOpen={isOpen} icon={<TeamIcon />} text={'Teams'} action={user.teams.length > 1 ? event => clickLink(event) : () => {} } />
                    </ListItem>
                    <ListItem>
                        <DrawerLink address={`/workspace/company/${user.company.id}/${user.company.name.toLowerCase()}`} isOpen={isOpen} icon={<CompanyIcon />} text={'Company'} action={() => {}} />
                    </ListItem>
                </List>
                <TeamsPopup teamsList={user.teams} popupIsOpen={popupIsOpen} closePopup={() => togglePopup()} />
                <DrawerTextButton icon={<ArrowIcon isOpen={isOpen} />} isOpen={isOpen} text='Collapse' action={event => toggleDrawer(event)} />
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComponent