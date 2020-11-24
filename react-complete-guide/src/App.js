import React, { useState } from "react";

import Person from "./Person/Person";

import "./App.css";

const App = (props) => {
  //hooks always return 2 elements
  // first element is the state
  // second is a function which allows us to update the state
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Was clicked!");
    // DON'T DO THIS!  this.state.persons[0].name = 'Maximillian'
    // has {} in it's argument, merges everything we put inside with our existing state
    // rerendering caused only by changing state and props
    setPersonsState({
      // doesn't merge previous and updated state, instead it replaces 
      // previous and updated state
      // we have to update non-updated things manually
      // instead use multiple states
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });
  };

  console.log(personsState)

  //this reffers to a class
  //don't add parentheses! it will run automatically after rendering!

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobby is: racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;

/*
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
*/
