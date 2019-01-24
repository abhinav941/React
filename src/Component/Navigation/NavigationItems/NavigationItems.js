import React from 'react'
import classes from './NavigationItems.css'
import Item from './NavigationItem/NavigationItem';

const Items = (props)=>(
    <ul
     className={classes.NavigationItems}>
     <Item link="/" active>BurgerBuilder</Item>
     <Item link="/" >Checkout</Item>
     </ul>
)

export default Items