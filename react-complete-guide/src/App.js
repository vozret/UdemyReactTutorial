import React, { Component } from "react";

import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  // stateful, smart or container, compontent -> manages state
  // good to have only a couple of them
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  };

  // if we don't use arrow function, possible problems with "this"
  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    // DON'T DO THIS!  this.state.persons[0].name = 'Maximilian'
    // has {} in it's argument, merges everything we put inside with our existing state
    // rerendering caused only by changing state and props
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  //this reffers to a class
  //don't add parentheses! it will run automatically after rendering!
  // <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>  CAN BE INEFITIENT
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button 
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
        >
          My hobby is: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
