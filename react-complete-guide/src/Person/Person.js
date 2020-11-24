import React from "react";

const person =  (props) => {
    // {} for dynamic content in a jsx file
  return <p>I am a {props.name} and I am {props.age} years old.</p>;
}

export default person;
