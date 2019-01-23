import React from 'react'
import Aux from '../../../hoc/Aux';

const OrderSummary=(props)=>{
    const ingredientTrans = Object.keys(props.ingredient)
        .map(igKey=>{
            return <li key={igKey}> 
                <span style={{textTransform:'capitalize'}}> {igKey} :{props.ingredient[igKey]}</span> 
                
                </li>
        })
    
    return(
        <Aux>
            <h3>Here we go!</h3>
            <p>Your Order Summary is :</p>
            <ul>
                {ingredientTrans}
            </ul>
        </Aux>
    );
}

export default OrderSummary