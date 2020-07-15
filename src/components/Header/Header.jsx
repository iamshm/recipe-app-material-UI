import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import cx from 'classnames';
import styles from '../Header/Header.module.css'
const useStyles = makeStyles({
    header: {
        height: '70px',
    },
})

export default function Header() {
    const styling = useStyles();
    return (
        <AppBar position='sticky' className={cx(styling.header, styles.appBar)} >
            <Toolbar >
                <Typography className={cx(styles.title)}>
                    Foods Search API
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
