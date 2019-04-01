import React, { Component } from "react"

export default class FilterObject extends Component{

constructor(){
  super () 

  this.state = {
    unFilteredEmployees: [
      {
    abc: 'race',
    title: 'job',
    age: 22
    },

    {
      name: 'jim',
      title: 'foodie',
      age: 32
    },
    {
      efg: 'chuck',
      title: 'the chuckiest',
      age: 31
    }

    ],

    userInput:'',
    filteredEmployees: []
  }
}

handleChange(val){ 
  this.setState({ userInput : val })
}

filteredEmployees(prop) {
  let unFilteredEmployees = this.state.unFilteredEmployees
  let filteredEmployees = []

  for( let i = 0; i < unFilteredEmployees.length; i++) {
    if( unFilteredEmployees[i].hasOwnProperty(prop) )  {
      filteredEmployees.push(unFilteredEmployees[i])
    }
  }

    this.setState({filteredEmployees: filteredEmployees})

}

  render () {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4> Filter Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredEmployees,null,10)} </span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} ></input>
        <button className='confirmationButton' onClick={ () =>this.filteredEmployees(this.state.userInput)}>Filter</button> 
        <span className='resultsBox filterObjectRB'>Filtered:{JSON.stringify(this.state.filteredEmployees,null,10)} </span>
      </div>
    )
  }
}