import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment()
    {
        //updating state value directly doesnt work
        // this.state.count = this.state.count +1;
        // we need to use setState() method
        /*this.setState({
            count: this.state.count +1 ,
        }, () =>{

            console.log("count is " + this.state.count);
        }) */

        // Use prevState to update State value. For this we need to pass func as an argument
        this.setState( k => ({
            count: k.count+1,
        }) )
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => {this.incrementFive()}}>Increment</button>
      </div>
    )
  }
}

export default Counter