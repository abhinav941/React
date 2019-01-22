import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Component/Burger/Burger';
import BurgerControls from '../../Component/Burger/BurgerControls/BurgerControls';


const INGREDIENT_PRICE={
    'salad':0.5,
    'cheese':0.4,
    'bacon':0.6,
    'meat':1.4
}



class BurgerBuilder extends Component{

    state={
        ingredients:{
            'bacon':0,
            'cheese':0,
            'meat':0,
            'salad':1,
        },
        basePrice:2.25
    }

    addIngredientHandler =(type)=>{
        let oldIngredient = {...this.state.ingredients}
        oldIngredient[type] += 1
        let price = this.basePrice;
        price += INGREDIENT_PRICE[type]
        this.setState({
            ingredients:oldIngredient,basePrice:price
        });
    }


    removeIngredientHandler=(type)=>{
        let oldIngredient = {...this.state.ingredients};
        if(oldIngredient[type] <= 0 ){
            return;
        }
        oldIngredient[type] -= 1
        let price = this.basePrice;
        price -= INGREDIENT_PRICE[type]
        this.setState({
            ingredients:oldIngredient,basePrice:price
        });
    }




    render(){


        return(
            <Aux>
               <Burger
                ingredients={this.state.ingredients}
               ></Burger>
               <BurgerControls
               addItem={this.addIngredientHandler}
               removeItem={this.removeIngredientHandler}
               ></BurgerControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;