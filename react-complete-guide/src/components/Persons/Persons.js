import React, { Component } from "react";
import Person from "./Person/Person";

// => () -> automatically returns things in props
class Persons extends Component {
  /*static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps...");
    return state;
  }*/

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate...");
    // we compare the pointers!!!! not the values!
    // google chrome dev tools -> rendering, to see what will change
    if(nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate...");
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate...");
    console.log(snapshot);
  }

  componentWillUnmount() {
    // any code to clean the data
    console.log("[Persons.js] componentWillUnmount...");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
