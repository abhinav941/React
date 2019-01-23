import React from 'react';
import classes from './BurgerControl.css';

const burgerControl=(props)=>{
    return(
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.children}</div>
            <button className={classes.Less} onClick={props.remove} disabled={props.isDisabled}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    );
}

export default burgerControl;