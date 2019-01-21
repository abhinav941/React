import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css'
// import Aux from '../../hoc/Aux';

const Burger =(props)=>{
    let transformedIngredient =Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient type={igKey} key={igKey+i}></BurgerIngredient>
            } 
        )
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(transformedIngredient.length ===0){
        transformedIngredient = <p>Please enter some ingredients</p>
    }


    return(
        <div className={classes.Burger}>
            
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
        
    );
 }

 export default Burger;