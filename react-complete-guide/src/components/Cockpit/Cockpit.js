import React, {useEffect, useRef} from "react";
import AuthContext from '../../context/auth-context';

import classes from "./Cockpit.css";

  // stateless, dumb or prezentational, component, doesn't manage state
  // good to have a lot of them, easy to change and manage
  // {} for dynamic content in a jsx file
  // children reffers to any element between opening and closing tag
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  // useEffect -> takes a function for every render cycle
  // also runs when component is created
  // combines componentDidMount and componentDidUpdate
  // second parameter -> to know when to run useEffect(), [props.persons] -> change in the state; [] -> runs only for the first time
  useEffect(() => {
    console.log('[Cockpit.js] useEffect...');
    //Http request...
    // const timer = 
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This really works!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

// memo -> saves the snapshot of the component
// it will rerender only if the props changes
export default React.memo(Cockpit);
