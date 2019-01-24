import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Component/Burger/Burger';
import BurgerControls from '../../Component/Burger/BurgerControls/BurgerControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICE = {
    'salad': 0.5,
    'cheese': 0.4,
    'bacon': 0.6,
    'meat': 1.4
}



class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'bacon': 0,
            'cheese': 0,
            'meat': 0,
            'salad': 0,
        },
        basePrice: 2.25,
        disabledBtn: false,
        purchasing: false
    }



    disableButton = (ingredient) => {
        let info = this.state.disableBtn
        const sum = Object.keys(ingredient)
            .map(igKey => {
                return ingredient[igKey]
            }).reduce((x, i) => {
                return x + i;
            }, 0)

        if (sum > 0) {
            info = true
        }
        else {
            info = false
        }

        this.setState({
            disabledBtn: info
        })

    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })

    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }


    removeIngredientHandler = (type) => {
        let oldIngredient = { ...this.state.ingredients };
        if (oldIngredient[type] <= 0) {
            return;
        }
        oldIngredient[type] -= 1
        let price = this.state.basePrice;
        price -= INGREDIENT_PRICE[type]
        this.setState({
            ingredients: oldIngredient, basePrice: price
        });
        this.disableButton(oldIngredient);
    }
    addIngredientHandler = (type) => {
        let oldIngredient = { ...this.state.ingredients }
        oldIngredient[type] += 1
        let price = this.state.basePrice;
        price += INGREDIENT_PRICE[type]
        this.setState({
            ingredients: oldIngredient, basePrice: price
        });
        this.disableButton(oldIngredient);

    }

    purchaseContinueHandler=()=>{
        alert('You Continue!!!');
    }




    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let i in disabledInfo) {
            let x = disabledInfo[i]
            disabledInfo[i] = x <= 0;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    clickOnBackdrop={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredient={this.state.ingredients} 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger
                    ingredients={this.state.ingredients} />
                <BurgerControls
                    addItem={this.addIngredientHandler}
                    removeItem={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.basePrice}
                    ordered={this.purchaseHandler}
                    btnDisable={this.state.disabledBtn}
                ></BurgerControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;