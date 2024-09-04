import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import MyPureComp from './MyPureComp'

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
        <RegComp name ={this.state.name}/>
        <MyPureComp name ={this.state.name}/>
        </div>
    )
  }
}

export default ParentComp