import React, { Component } from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

import classes from "./App.css";

class App extends Component {
  // stateful, smart or container, compontent -> manages state
  // good to have only a couple of them
  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "sasasa", name: "Max", age: 28 },
      { id: "kakaka", name: "Manu", age: 29 },
      { id: "lalala", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] ComponentDidUpdate');
  }

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
    // we create the copy on the other place in memory
    // shouldComponentUpdate in Persons.js is true!
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
    console.log('[App.js] render')
    let persons = null;

    // index element in the map() is passed here automatically
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showCockpit: false});}}>Remove cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
  }
}

export default App;