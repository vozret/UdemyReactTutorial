import React, { Component } from "react";
//import Aux from "../../../hoc/Aux";

//import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      //<div className="Person" style={style}>
      //<div className={classes.Person}>
      // React.Fragment = Aux
      <React.Fragment>
        <p onClick={this.props.click}>
          I am a {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
      //</div>
    );
  }
}

export default Person;
