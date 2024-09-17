import React, { Component } from 'react'

class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
    render() {
    return (
      <div>FRParentInput</div>
    )
  }
}

export default FRParentInput