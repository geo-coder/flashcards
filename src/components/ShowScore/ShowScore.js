import React from 'react'
import classes from './ShowScore.module.css'
import ShowCardAnswers from './ShowCardAnswers/ShowCardAnswers'
import SimpleButton from '../UI/Button/SimpleButton'


const showScore = (props) =>{

    console.log(props.completedCards)
    let wrongAnswerPresent = false

    for (let x=0; x<props.completedCards.length; x++) {
        if (!props.completedCards[x].isCorrect) {
            wrongAnswerPresent=true
            break
        }

    }


    return(
        
        <div className={classes.ShowScore}>
            
            
            <h1>Quiz Complete!</h1>
            <h1>{(props.correctNumber / props.total) * 100}%</h1>
            <p>You got {props.correctNumber} of {props.total} right.</p>      
            
            
            
            <ShowCardAnswers completedCards={props.completedCards}/>

            <div className={classes.FixedBottom}>
                
                <div className={classes.BottomContent}>
                <SimpleButton clicked={props.restart} buttonText='Review Again'/>
                {wrongAnswerPresent ? <SimpleButton buttonText='Review Wrong Answers' clicked={props.reviewWrong} /> : null}
                </div>

            </div>
            
            
        </div>
            
        
        
    )
}


export default showScore