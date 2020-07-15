import React from 'react'
import styles from '../Recipes/Recipes.module.css'
import { Grid } from '@material-ui/core';
import cx from 'classnames';

const Recipes = ({ title, calories, imageUrl, source }) => {
    return (
        <Grid item xs={8} md={4} className={cx(styles.card)} >
            <div className={cx(styles.cardSection)}>
                <h1 className={cx(styles.name)}>{title}</h1>
                <img src={imageUrl} alt={title} className={cx(styles.image)} />
                <p className={cx(styles.cal1)}>Total calories :<br />{calories} </p>
                <p className={cx(styles.src)}>By {source}</p>
            </div>
        </Grid >

    )
}

export default Recipes;