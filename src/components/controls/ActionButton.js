import React from 'react'
import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5)
    },
    primary: {
        backgroundColor: "#33cccc",
        '& .MuiButton-label': {
            color: theme.palette.secondary.main,
        }
    },
    secondary: {
        backgroundColor: '#E3FBF9',
        '& .MuiButton-label': {
            color: "#3399ff",
        }
    },
}))

export default function ActionButton(props) {

    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button
        size='small'
            className={`${classes.root} ${classes[color]}`}
            onClick={onClick}>
            {children}
        </Button>
    )
}
