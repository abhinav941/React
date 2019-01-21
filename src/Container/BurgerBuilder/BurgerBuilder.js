import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Component/Burger/Burger';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            'bacon':0,
            'cheese':0,
            'meat':0,
            'salad':0,
        },
        'basePrice':"$"+2.25
    }




    render(){
        return(
            <Aux>
               <Burger
                ingredients={this.state.ingredients}
               ></Burger>
               <div>Build Controls</div> 
            </Aux>
        );
    }
}

export default BurgerBuilder;