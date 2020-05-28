import React from 'react'
import classes from './Card.module.css'



const card = (props) => {

let cardClass='Incorrect'
//classes[cardClass]+' '+

//<div className={classes[cardClass]}>

if (props.card.isCorrect) cardClass ='Correct'


return (
    <div className={classes.Card + ` ` + classes[cardClass]}>
        
       
        {props.card.sideA}
        <div className={classes.Border}>
        </div>
        {props.card.sideB}
    </div>
)
}

export default card