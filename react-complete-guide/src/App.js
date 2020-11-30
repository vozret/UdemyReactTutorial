import React, { Component } from "react";
import styled from "styled-components";

import Person from "./Person/Person";

import "./App.css";

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`;

class App extends Component {
  // stateful, smart or container, compontent -> manages state
  // good to have only a couple of them
  state = {
    persons: [
      { id: "sasasa", name: "Max", age: 28 },
      { id: "kakaka", name: "Manu", age: 29 },
      { id: "lalala", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // if we don't use arrow function, possible problems with "this"

  nameChangedHandler = (event, id) => {
    // ALWAYS WORK WITH THE COPIES OF THE STATE!!!
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      // left: state, right: new copy
      persons: persons,
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
      persons: persons,
    });
  };

  //togglePersonsHandler(){} problems with 'this'

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  //this reffers to a class
  //don't add parentheses! it will run automatically after rendering!
  // <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>  CAN BE INEFITIENT
  render() {

    let persons = null;

    // index element in the map() is passed here automatically
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>This really works!</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;
