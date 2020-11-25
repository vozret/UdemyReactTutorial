import React from "react";

import './Components.css';

const UserOuput = (props) => {
  return (
    <div class="user-output">
      <p>{props.textOne}</p>
      <p>{props.textTwo}</p>
    </div>
  );
};

export default UserOuput;
