import React, {Component} from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

class Toolbar extends Component {




    render(){
        return(
        <div className={classes.Toolbar}>Test
        
        <NavigationItems/>
        </div>
        )
    }
}

export default Toolbar