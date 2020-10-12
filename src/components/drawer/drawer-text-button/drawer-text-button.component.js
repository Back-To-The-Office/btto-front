import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BTTO_WHITE } from '../../../common-styles/vars';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        marginTop: 'auto',
        marginBottom: 25,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: BTTO_WHITE,
            fontSize: '1rem',
            marginLeft: 15,
        },
        '& svg': {
            '& path': {
                fill: BTTO_WHITE
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

const DrawerTextButton = ({ icon, text, action, isOpen }) => {
    const classes = useStyles();
    return (  
        <button
            className={clsx(
                classes.root,{
                    [classes.drawerOpened]: isOpen,
                    [classes.drawerClosed]: !isOpen
                }
            )}
            onClick={action}
        >
            {icon}
            <p>{text}</p>
        </button>
    )
}

export default DrawerTextButton