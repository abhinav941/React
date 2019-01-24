import React from 'react';
import classes from './Navigation.css';
import Logo from '../../UI/Logo/Logo';
import Items from './NavigationItems/NavigationItems';
import Menu from '../Navigation/Menu/Menu';

const Navigation =(props)=>(
    <header className={classes.Navigation}>
        <Menu show={props.toggleStats}
        clicked={props.toggleBtn}/>
        <Logo></Logo>
        <nav className={classes.DesktopOnly}>
            <Items/>
        </nav>
    </header>
);
export default Navigation;

