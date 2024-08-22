import React, { Component } from 'react'

class ConditionalRendering extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Vishwas</div> :
    //     <div>GoodBye Vishwas</div>
      
    // )
  }
}

export default ConditionalRendering