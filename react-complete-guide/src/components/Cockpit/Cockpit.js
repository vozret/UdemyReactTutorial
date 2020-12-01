import React, {useEffect} from "react";

import classes from "./Cockpit.css";

  // stateless, dumb or prezentational, component, doesn't manage state
  // good to have a lot of them, easy to change and manage
  // {} for dynamic content in a jsx file
  // children reffers to any element between opening and closing tag
const Cockpit = (props) => {
  // useEffect -> takes a function for every render cycle
  // also runs when component is created
  // combines componentDidMount and componentDidUpdate
  // second parameter -> to know when to run useEffect(), [props.persons] -> change in the state; [] -> runs only for the first time
  useEffect(() => {
    console.log('[Cockpit.js] useEffect...');
    //Http request...
    // const timer = 
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000); 
    // runs BEFORE the main useEffect function runs but AFTER the (first) render cycle!
    return () => {
      //clearTimeout(timer);
      console.log("[Cockpt.js] cleanup work in useEffect");
    }
  }, []);

  // no 2nd argument
  //update for every cycle
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect...');
    return () => {
      console.log("[Cockpt.js] cleanup work in 2nd useEffect");
    }
  });

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This really works!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
