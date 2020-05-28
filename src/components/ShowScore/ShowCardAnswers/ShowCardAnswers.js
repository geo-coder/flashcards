import React from 'react'
import classes from './ShowCardAnswers.module.css'
import Card from './Card/Card'


const showCardAnswers = (props) =>{

    
    let content=[]
    
    console.log(props.completedCards)
    
    

    content = props.completedCards.map((card, index)=>{
        return (<Card key={'card'+index} card={card}/>
        
        
        )
    })


    return(
        <div style={{marginTop: '35px', marginBottom:'35px'}}>
            {content}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        
    )
}


export default showCardAnswers