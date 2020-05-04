import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import { BTTO_GREEN, BTTO_WHITE } from '../../../common-styles/vars';

const useStyles = makeStyles({
    root: {
        border: `2px solid ${BTTO_GREEN}`,
        color: BTTO_WHITE,
        borderRadius: 8,
        padding: '16px 30px',
        textTransform: 'uppercase',
        letterSpacing: 1.35,
        margin: '30px 0 90px',
        '&:hover': {
            backgroundColor: 'rgba(0, 230, 118, 0.7)'
        }
    },
    rootSmall: {
        padding: '5px'
    },
    svg: {
        fill: BTTO_WHITE
    }
});

const DrawerButton = ( { isOpen } ) => {
    const classes = useStyles();
    return (
        <Button
            variant='outlined'
            className={`${classes.root} ${!isOpen ? classes.rootSmall : ''}`}
        >
            {isOpen ? 'start work' : <PlayArrow className={classes.svg} />}
        </Button>
    )
}

export default DrawerButton