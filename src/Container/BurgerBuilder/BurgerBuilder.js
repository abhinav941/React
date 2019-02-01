import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Component/Burger/Burger';
import BurgerControls from '../../Component/Burger/BurgerControls/BurgerControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary';
import axios from '../../axios'
import Spinner from '../../UI/Spinner/Spinner';
import withErrorClass from '../../hoc/withErrorClass/withErrorClass';

const INGREDIENT_PRICE = {
    'salad': 0.5,
    'cheese': 0.4,
    'bacon': 0.6,
    'meat': 1.4
}



class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        basePrice: 2.25,
        disabledBtn: false,
        purchasing: false,
        loading: false,
        error: false
    }


    componentDidMount() {
        axios.get("/ingredients.json")
            .then(request => {
                this.setState({ ingredients: request.data })
            })
            .catch(error => {
                this.setState({ error: true })
            })
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

    purchaseContinueHandler = () => {
        this.setState({ loading: true })
        const data = {
            ingredient: this.state.ingredients,
            customer: {
                name: "Abhinav",
                address: {
                    street: 'GLA University',
                    locality: 'NH-`2 GT Road',
                    city: 'Mathura'
                },
                email: 'abhi@gmail.com',
                phone: '8191894689'
            },
            deliveryMethod: 'fastest',
        }

        axios.post('/orders.json', data)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }




    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let i in disabledInfo) {
            let x = disabledInfo[i]
            disabledInfo[i] = x <= 0;
        }

        let burger = this.state.error ?  <p>Unable to load Ingredient</p>:<Spinner /> ;
        let orderSummary = null;
        if (this.state.ingredients) {
            burger = (
                <Aux>
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
            )
            orderSummary = <OrderSummary
                ingredient={this.state.ingredients}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} 
                price={this.state.basePrice}/>
        }


        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    clickOnBackdrop={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }
}

export default withErrorClass(BurgerBuilder, axios);