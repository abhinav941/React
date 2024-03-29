import React from 'react'
import classes from './Modal.css'
import Backdrop from '../BackDrop/Backdrop'
import Aux from '../../hoc/Aux'

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clickOnBackdrop}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>

    );
}

export default modal