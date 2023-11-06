import React from "react";
import "./Form.css";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Enter your name" className="name__form" />
      <input
        type="text"
        placeholder="Enter your lastname"
        className="lastname__form"
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="email__form"
      />
      <input
        type="text"
        placeholder="Enter your username"
        className="usernane__form"
      />
      <input
        type="password"
        placeholder="Create your password"
        className="creat_password__form"
      />
      <input
        type="password"
        placeholder="Confirm your password"
        className="confirm_password__form"
      />
      <button>Sign in</button>
      <button>Sign up</button>
    </form>
  );
}

export default Form;
