import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSidedraw:true
    }
    closeBackdropHandler=()=>{
        this.setState({
            showSidedraw:false
        })
    }


    render() {
        return (
        <Aux>
            <SideDrawer close={this.closeBackdropHandler} open={this.state.showSidedraw}/>
            <Navigation />
            <main className={classes.main}>
                {this.props.children}
            </main>
            <footer></footer>
        </Aux>);
    }
}
export default Layout;