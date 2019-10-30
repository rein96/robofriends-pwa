import React, { Component } from 'react'
// PureComponent = component will re-rendered when props CHANGE, and the alternative way is using shouldCOmponentUpdate() on normal Component  

export class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // prevent re-rendering when Count is not needed to be rendered (like search Robots on searchBar)
    shouldComponentUpdate(nextProps, nextState) {   // should return true or false
        // console.log(nextProps, nextState)   // nextProps = {color: "red"}   //nextState = { count : 1 }
        
        if (this.state.count !== nextState.count) {
            return true;    // update component
        } else {
            return false;
        }
    }

    updateCount = () => {
        // this.setState({ count: this.state.count + 1 })  // sometimes get some funny side effect because setState = Async
        this.setState( state => {
            return { count: state.count + 1 }
        })
    }

    render() {
        console.log('CounterButton')
        return (
            <div>
                <button color={this.props.color} onClick={this.updateCount} > Count: {this.state.count} </button>
            </div>
        )
    }
}

export default CounterButton
