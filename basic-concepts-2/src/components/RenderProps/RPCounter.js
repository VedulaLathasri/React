import React, { Component } from 'react'

class RPCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
      }
    
      incrementCount() {
          this.setState(prevState => ({
               count: prevState.count + 1
          }))
      }
    
    render() {
    return (
      <div>
        {this.props./*render*/children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default RPCounter