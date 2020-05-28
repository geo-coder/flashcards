import React, {Component} from 'react'
import classes from './YesNoFlashCard.module.css'

import YesNoButtons from '../YesNoButtons/YesNoButtons'



class YesNoFlashCard extends Component{


    state = {
        sideA: true,

    }

    flipHandle = () =>{
        

        this.setState((state) => ({
            sideA: !state.sideA
          }));
    }


    correctClicked=()=>{
        this.props.tickScoreUp()


    }



    
    render () {

        
        
        
        
        let cardContent = this.props.card.sideA

        if (this.state.sideA===false) cardContent=this.props.card.sideB
        
        return (
            
            <React.Fragment>
            
                <div className={this.state.sideA ? classes.Card + ' ' + classes.CardFlipFront : classes.Card + ' ' + classes.CardFlipBack}>
                    <p className={classes.cardContent}>
                        {cardContent}
                    </p>
                </div>
                
                <div className={classes.BottomContent}>
                    <button onClick={this.props.skipBack}>{String.fromCharCode(60)}</button>
                    <button className={classes.FlipButton} onClick={this.flipHandle}>Flip</button>                       
                    
                    <button onClick={this.props.skipAhead}>{String.fromCharCode(62)}</button>
                </div>

               

                <div className={classes.BottomContent} style={{marginTop: '5px', backgroundColor: 'lightgrey'}}>
                <YesNoButtons correctHandle={this.props.correctHandle}
                wrongHandle={this.props.wrongHandle} />
                </div>


            </React.Fragment>
            
        )

    }
    
}

export default YesNoFlashCard