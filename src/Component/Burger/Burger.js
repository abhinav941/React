import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css'
// import Aux from '../../hoc/Aux';
const Burger =(props)=>{
    return(
        <div className={classes.Burger}>
            
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
        
    );
 }

 export default Burger;