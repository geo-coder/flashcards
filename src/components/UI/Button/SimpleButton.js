import React from 'react'
import classes from './SimpleButton.module.css'

const simpleButton = (props) => {


    return (
    <button onClick={props.clicked} className={classes.SimpleButton}>{props.buttonText}</button>
    )
}

export default simpleButton