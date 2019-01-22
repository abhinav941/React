import React from 'react';
import classes from './BurgerControl.css';

const buildControl=(props)=>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.children}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
}

export default buildControl;