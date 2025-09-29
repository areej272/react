import React, { Component } from 'react'

export default class Updating extends Component {

    constructor(props){
        super(props); //invoke parent component
        this.state = {count:0}; //initialize state with count set 0.
    }

    increment = () => {
        this.setState({count: this.state.count+1}); //increment by 1
    }

    componentDidUpdate(prevState){
      if (prevState.count !== this.state.count) {
        console.log('Componet updatedd! New count', this.state.count);
      }
    }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
