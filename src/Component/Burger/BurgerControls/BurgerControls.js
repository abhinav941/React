import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';
const burgerControls =(props)=>{
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'}
    ]


    return(
        <div className={classes.BurgerControls}>
        {
            controls.map((name,index)=>{
                return <BurgerControl 
                key={name.type+index} 
                added={() => props.addItem(name.type)}
                remove={() => props.removeItem(name.type)}
                >{name.label}</BurgerControl>
            })
        }
        </div>
    );
}

export default burgerControls;