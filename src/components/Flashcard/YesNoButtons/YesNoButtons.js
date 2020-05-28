import React from 'react'
import classes from './YesNoButtons.module.css'


const yesNoButtons=(props)=>{




    return(
        <React.Fragment>
            
                   <button onClick={props.correctHandle} className={classes.YesNoButton} style={{backgroundColor: 'rgb(85, 216, 85)'}}>✔</button>  
                   <button onClick={props.wrongHandle} className={classes.YesNoButton} style={{backgroundColor: 'rgb(243, 109, 109)'}}>X</button>                      
            

        </React.Fragment>
    )
}

export default yesNoButtons