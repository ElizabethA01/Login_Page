import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <Button text={props.isRegistered ? "Log In" : "Register"} />
    </form>
  );
}

export default Form;
