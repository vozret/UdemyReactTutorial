import React from "react";

import classes from './Person.css';

const Person = (props) => {
  // stateless, dumb or prezentational, component, doesn't manage state
  // good to have a lot of them, easy to change and manage
  // {} for dynamic content in a jsx file
  // children reffers to any element between opening and closing tag

  console.log('[Persons.js] rendering...');
  return (
    //<div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
