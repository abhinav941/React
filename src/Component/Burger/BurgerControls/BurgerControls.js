import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BurgerControl/BurgerControl';
const buildControls =()=>{
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'}
    ]


    return(
        <div className={classes.BuildControls}>
        {
            controls.map((name,index)=>{
                return <BuildControl key={name.type+index} type={name.type}>{name.label}</BuildControl>
            })
        }
        </div>
    );
}

export default buildControls;