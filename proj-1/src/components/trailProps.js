import React from 'react'

const TrailProps = (props) => {
    console.log(props);
  return (
    <div>Hi {props.name} , your age is {props.age}</div>
  )
}

export default TrailProps