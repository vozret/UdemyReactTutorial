import React from "react";
import styled from "styled-components";

//import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  // stateless, dumb or prezentational, component, doesn't manage state
  // good to have a lot of them, easy to change and manage
  // {} for dynamic content in a jsx file
  // children reffers to any element between opening and closing tag

  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
    //</div>
  );
};

export default Person;
