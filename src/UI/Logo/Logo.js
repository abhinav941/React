import React from 'react';
import classes from './Logo.css'
import logo_img from '../../assets/Images/logo.png';

const Logo =()=>(
    <div className={classes.Logo}>
        <img src={logo_img} alt='MY Burger'/>
    </div>
);

export default Logo