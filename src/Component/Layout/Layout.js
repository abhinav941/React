import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout=(props)=>{
    return(
        <Aux>
            <SideDrawer/>
            <Navigation/>
            <main className={classes.main}>
                {props.children}
            </main>
            <footer></footer>
        </Aux>
    );

    
}
export default Layout;