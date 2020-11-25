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
    showPersons: false,
  };

  // if we don't use arrow function, possible problems with "this"

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // in JS, objects and arrays are reference types
    // in splice() we already mutated the original data
    // good practice to create a copy before mutating it
    // slice() method
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  //togglePersonsHandler(){} problems with 'this'

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  //this reffers to a class
  //don't add parentheses! it will run automatically after rendering!
  // <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>  CAN BE INEFITIENT
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    // index element in the map() is passed here automatically
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
          />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>

    );
}}

export default App;
