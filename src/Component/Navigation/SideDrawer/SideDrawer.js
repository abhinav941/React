import classes from './SideDrawer.css'
import React from 'react'
import Items from '../NavigationItems/NavigationItems';
import Logo from '../../../UI/Logo/Logo';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
        <Logo/>
            <nav>
                I<Items/>
            </nav>
        </div>
    );
}
export default sideDrawer