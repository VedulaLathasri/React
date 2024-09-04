import React, { PureComponent } from 'react'

class MyPureComp extends PureComponent {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    name: 'Latha'
    // }
  }
  render() {
    console.log('Pure Comp render');
    return (
      <div>MyPureComp {this.props.name}</div>
    )
  }
}

export default MyPureComp