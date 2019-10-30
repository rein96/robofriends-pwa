import React, { Component } from 'react'
import CounterButton from './CounterButton'

export class Header extends Component {

    // prevent re-rendering
    shouldComponentUpdate(nextProps, nextState) {
        // if true = update component (default)
        return false;   // false = never update component
    }
    
    render() {
        console.log('Header')
        return (
            <div>
                <h1 className="f1">RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }
}

export default Header
