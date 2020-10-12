import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { BTTO_WHITE, BTTO_YELLOW } from '../../../common-styles/vars';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: BTTO_WHITE,
            fontSize: '1.25rem',
            marginLeft: 15,
        },
        '& svg': {
            '& path': {
                fill: BTTO_WHITE
            }
        }
    },
    linkActive: {
        '& p': {
            color: BTTO_YELLOW,
        },
        '& svg': {
            '& path': {
                fill: BTTO_YELLOW
            }
        }
    },
    drawerOpened: {
        '& p': {
            display: 'block'
        }
    },
    drawerClosed: {
        '& p': {
            display: 'none'
        }
    }
});

const DrawerLink = ({ address, icon, text, action, isOpen=true }) => {
    const classes = useStyles();
    return (  
        <NavLink 
            className={clsx(
                classes.root,{
                    [classes.drawerOpened]: isOpen,
                    [classes.drawerClosed]: !isOpen
                }
            )} 
            to={address} 
            onClick={action}
            activeClassName={classes.linkActive}
        >
            {icon ? icon : null}
            <p>{text}</p>
        </NavLink>
    )
}

export default DrawerLink