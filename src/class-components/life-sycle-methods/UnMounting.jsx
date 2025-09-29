import React, { Component } from 'react'

export default class UnMounting extends Component {
    state = {
        time: 0
    }

    componentDidMount(){
        // start a timer when the component mount
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1
            }))
        },1000)
    }

    componentWillUnmount(){
        //clean up timer
        clearInterval(this.timer);
        console.log('Timer cleaned up!');
        
    }

  render() {
    return (
      <div>
            <h1>Time: {this.state.time} seconds</h1>
      </div>
    )
  }
}
