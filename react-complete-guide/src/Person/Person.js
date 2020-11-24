import React from "react";

const Person = (props) => {
  // {} for dynamic content in a jsx file
  // children reffers to any element between opening and closing tag
  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
