import React from 'react';
import classes from './Menu.css'

const menu = (props) => {
    // let aClass = classes.Open;
    // if(props.show){
    //     aClass = classes.Close
    // }

    return (
        <div className={classes.Menu} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
            
    );

}
export default menu