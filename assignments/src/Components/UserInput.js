import React from "react";

import "./Components.css";

const UserInput = (props) => {
  const style = {
    width: "60%",
    cursor: "pointer",
    fontSize: '60px'
  };

  return (
    <div className="user-input">
      <input style={style} type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default UserInput;
