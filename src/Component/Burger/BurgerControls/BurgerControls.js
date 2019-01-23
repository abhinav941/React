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
        <p>Current Price:<strong>$ {props.price.toFixed(2)}</strong></p>
        {
            controls.map((name,index)=>{
                return <BurgerControl 
                key={name.type+index} 
                added={() => props.addItem(name.type)}
                remove={() => props.removeItem(name.type)}
                isDisabled={props.disabledInfo[name.type]}
                >{name.label}</BurgerControl>
            })
        }
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.btnDisable}> Order Now</button>
        </div>
    );
}

export default burgerControls;