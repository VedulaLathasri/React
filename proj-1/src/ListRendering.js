import React from 'react'

function ListRendering() {
    const names = ['Latha', 'Subbu', 'Rishika']
    let namesList = names.map(x => <h2>{x}</h2>)
  return (
    <div>
        {namesList}
    </div>
  )
}

export default ListRendering