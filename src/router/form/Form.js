import React, { useState } from "react";
import "./Form.css";

function Form() {
  const Data = [
    {
      name: "Jaxongir",
      lastName: "Mirhalikov",
      email: "joxamuattar@gmail.com",
      userName: "joxasabr",
      password: "joxa05joxa",
    },
  ];

  const createP = document.querySelector(".creat_password__form");
  const userName = document.querySelector(".usernane__form");
  const name = document.querySelector(".name__form");
  const lasName = document.querySelector(".lastname__form");
  const email = document.querySelector(".email__form");
  const confirmP = document.querySelector(".confirm_password__form");
  const checkUserName = document.querySelector(".checkUserName");
  const checkPassword = document.querySelector(".checkPassword");

  const [scale, setScale] = useState(0);
  const getUsers = localStorage.getItem("users");
  const gotData = JSON.parse(getUsers);

  const sign = () => {
    const user = {
      name: name.value,
      lastName: lasName.value,
      email: email.value,
      userName: userName.value,
      password: createP.value,
    };
    localStorage.setItem("users", JSON.stringify([user]));
    // console.log(gotData[0].userName);
    // console.log(gotData[0].password);
  };

  return (
    <div className="form_parent">
      <form className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter your name"
            className="name__form"
            required
          />
          <input
            type="text"
            placeholder="Enter your lastname"
            className="lastname__form"
            required
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
            required
          />
          <input
            type="password"
            placeholder="Create your password"
            className="creat_password__form"
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="confirm_password__form"
            required
          />
        </div>
        <div className="btns">
          <button onClick={sign}>Sign up</button>
          <button type="button" onClick={() => setScale(1)}>
            Sign in
          </button>
        </div>
        <div className="login" style={{ transform: `scale(${scale})` }}>
          <form className="form__login">
            <div className="inputs">
              <input
                type="text"
                placeholder="Enter your Username"
                className="checkUserName"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="checkPassword"
              />
            </div>
            <div className="btns">
              <button>Sign in</button>
              <button type="button">Sign up</button>
            </div>
          </form>
        </div>
      </form>
    </div>
  );
}

export default Form;
