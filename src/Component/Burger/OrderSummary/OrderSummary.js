import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../../UI/Button/Button';

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
            <ul style={{listStyle:'none'}}>
                {ingredientTrans}
            </ul>
            
            <span ><strong>Pricing : </strong>  ${props.price}</span><br></br>

            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        </Aux>
    );
}

export default OrderSummary