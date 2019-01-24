import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Navigation from '../Navigation/Navigation';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSidedraw:false
    }

    toggleButtonHandler=()=>{
        const sidedraw= this.state.showSidedraw
        this.setState({
            showSidedraw:!sidedraw
        })
    }

    render() {
        return (
        <Aux>
            <SideDrawer close={this.toggleButtonHandler} open={this.state.showSidedraw}/>
            <Navigation toggleStats={this.showSidedraw}
            toggleBtn={this.toggleButtonHandler}
            />
            <main className={classes.main}>
                {this.props.children}
            </main>
            <footer></footer>
        </Aux>);
    }
}
export default Layout;