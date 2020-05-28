import React, {Component} from 'react'

import YesNoFlashCard from '../../components/Flashcard/YesNoFlashCard/YesNoFlashCard'

import ShowScore from '../../components/ShowScore/ShowScore'

class PlayFlashCards extends Component {


    state = {

        cards : [
            {
            sideA: 'capital of CT pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of pital of ',
            sideB: 'Hartford',

            },
            {
             sideA: 'capitol of  NY',
             sideB: 'Albany'
            },
            {
                sideA: 'Test A',
                sideB: 'Side B'
            },
            {
                sideA: 'sd',
                sideB: 'sdfasdfasdfa'
            },
            {
                sideA: 'tu',
                sideB: 'you'
            },
            {
                sideA: 'bro',
                sideB: 'brod'
            },
            {
                sideA: 'aeee',
                sideB: 'eeee'
            },
            {
                sideA: 'eeee',
                sideB: 'eeeeeeeeeeeeeee'
            }


    
        ],
        currentScore: 0,
        currentCard:0,
        toBeViewedCards:[],
        completedCards:[],
        sequenceStyle: 'shuffle'
    }


    initialState = {
        currentScore: 0,
        currentCard:0,
        toBeViewedCards:[],
        completedCards:[]
    }

   
   
    restart=()=>{ //clears score and completed cards for a new quiz
 
        let cardCopy=[...this.state.cards]
        

        if (this.state.sequenceStyle==='shuffle') { //shuffle the deck if shuffle toggled

            
            cardCopy=this.shuffle(cardCopy)
      
        }
    
  
        
        this.setState({
        toBeViewedCards: cardCopy,
         currentScore: 0,
         currentCard:0,
         completedCards:[],
 
        })
    }
   
   
   componentWillMount(){
       
      
        this.restart()
     }



    shuffle = (cardCopy) => {
       
        for (let x=0; x<cardCopy.length; x++){
            let remove = cardCopy.splice(x,1)
            let randomIndex=Math.floor(Math.random() * this.state.cards.length)
            cardCopy.splice(randomIndex, 0, remove[0])
           
        }

        return cardCopy

    }

    reviewWrong = () => {

        
        let wrongCards = this.state.completedCards.filter(item=>!item.isCorrect)

        //wrongCards = this.shuffle(wrongCards)
        this.setState({toBeViewedCards: wrongCards,
            completedCards: [],
            currentCard: 0,
            currentScore: 0
        
        
        })
    }

    
   skipAhead = () => {

    if (this.state.currentCard===this.state.toBeViewedCards.length-1) {
        this.setState({currentCard:0})
    } else {
          
        this.setState((state)=>({
            currentCard:state.currentCard+1
        }))


    }
    }

    skipBack = () => {

        if (this.state.currentCard===0) {
            this.setState({currentCard:this.state.toBeViewedCards.length-1})
        } else {
              
            this.setState((state)=>({
                currentCard:state.currentCard-1
            }))
    
    
        }
    
   }    
   
    
   toFinishedPile = (isCorrect) => { //returns the updated toBeViewed deck, new card Index

        let remaining=[...this.state.toBeViewedCards] //remove the completed card from the deck
        let removedCard=remaining.splice(this.state.currentCard ,1)[0]
        let newCardIndex=this.state.currentCard //set index of the next card to be viewed

        if (newCardIndex>remaining.length-1) newCardIndex=remaining.length-1 
    
        
        removedCard.isCorrect=isCorrect //insert an is correct? property on the completed card
        
        
        
        let completedCards=[...this.state.completedCards] //add this card to the deck of 'completed' cards
        completedCards.push(removedCard)

        let pointIncrement=0 

        if (isCorrect) pointIncrement=1 




        this.setState((state) => ({
            currentScore: state.currentScore + pointIncrement, 
            completedCards: completedCards,
            toBeViewedCards: remaining,
            currentCard: newCardIndex
            
          }));
        
        
        
   }
   
  
   
   correctHandle = () => {
       this.toFinishedPile(true)
    }

    wrongHandle=()=>{
        this.toFinishedPile(false)
    }


    render() {
        return(

            
            <React.Fragment>
                
               
                { this.state.toBeViewedCards.length===0 ? 
                    <ShowScore correctNumber={this.state.currentScore} 
                    total={this.state.completedCards.length}
                    completedCards={this.state.completedCards}
                    reviewWrong={this.reviewWrong}
                    restart={this.restart}
                    
                    /> :
                    
                    
                    <YesNoFlashCard correctHandle={this.correctHandle} 
                    wrongHandle={this.wrongHandle}
                    card={this.state.toBeViewedCards[this.state.currentCard]} 
                    skipAhead={this.skipAhead}
                    skipBack={this.skipBack}
                    
                    
                    />}
                
                
            </React.Fragment>
            
        )
    }
}


export default PlayFlashCards