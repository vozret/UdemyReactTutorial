import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  // if we don't use arrow function, possible problems with "this"
  switchNameHandler = () => {
    //console.log("Was clicked!");
    // DON'T DO THIS!  this.state.persons[0].name = 'Maximillian'
    // has {} in it's argument, merges everything we put inside with our existing state
    // rerendering caused only by changing state and props
    this.setState({persons: [
      { name: 'Maximilian', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
  });
  }

  //this reffers to a class
  //don't add parentheses! it will run automatically after rendering!
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
