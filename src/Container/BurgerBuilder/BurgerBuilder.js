import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Component/Burger/Burger';
import BuildControls from '../../Component/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            'bacon':0,
            'cheese':0,
            'meat':0,
            'salad':1,
        },
        'basePrice':"$"+2.25
    }




    render(){
        return(
            <Aux>
               <Burger
                ingredients={this.state.ingredients}
               ></Burger>
               <BuildControls></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;