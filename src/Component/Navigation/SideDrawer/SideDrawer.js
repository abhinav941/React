import classes from './SideDrawer.css'
import React from 'react'
import Items from '../NavigationItems/NavigationItems';
import Logo from '../../../UI/Logo/Logo';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../../UI/BackDrop/Backdrop'

const sideDrawer = (props) => {
    let attackedClass=[classes.SideDrawer,classes.Close];
    if(props.open){
        attackedClass=[classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attackedClass.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <Items />
                </nav>
            </div>
        </Aux>
    );
}
export default sideDrawer