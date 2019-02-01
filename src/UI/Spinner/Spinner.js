import React from 'react';
import classes from './Spinner.css';


const Spinner = () => {
    return <div className={classes.LoaderGrid}>
        <div className={[classes.Cube ,classes.cube1].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube2].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube3].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube4].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube5].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube6].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube7].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube8].join(" ")}></div>
        <div className={[classes.Cube ,classes.cube9].join(" ")}></div>
        
    </div>
}

export default Spinner;