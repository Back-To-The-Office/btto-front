import { makeStyles } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles({
    open: {
        transform: 'rotate(0)',
        transition: 'all linear 0.3s'
    },
    closed: {
        transform: 'rotate(-180deg)',
        transition: 'all linear 0.3s'
    }
})

const ArrowIcon = ({ isOpen }) => {
    const classes = useStyles();
    return (
        <ArrowBackIos className={clsx({
            [classes.open]: isOpen,
            [classes.closed]: !isOpen 
        })} />
    )
}

export default ArrowIcon