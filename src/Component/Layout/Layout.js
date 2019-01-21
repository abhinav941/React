import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
const Layout=(props)=>{
    return(
        <Aux>
            <div>Navigation bar....</div>
            <main className={classes.main}>
                {props.children}
            </main>
            <footer></footer>
        </Aux>
    );
}
export default Layout;