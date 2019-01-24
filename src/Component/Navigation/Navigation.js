import React from 'react';
import classes from './Navigation.css';
import Logo from '../../UI/Logo/Logo';
import Items from './NavigationItems/NavigationItems';


const Navigation =()=>(
    <header className={classes.Navigation}>
        <div>Menu</div>
        <Logo/>
        <nav>
            <Items/>
        </nav>
    </header>
);
export default Navigation;

