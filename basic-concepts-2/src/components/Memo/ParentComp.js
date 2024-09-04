import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Latha'
      }
    }

    componentDidMount() {
        setInterval(() =>{
            this.setState({
                name:'Latha'
            })
        }, 2000)
    }
  render() {
    console.log('---------parent Comp render');
    return (
      <div>
        ParentComp
        <MemoComp/>
        </div>
    )
  }
}

export default ParentComp