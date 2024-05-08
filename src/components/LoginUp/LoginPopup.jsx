import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import Validation from "./Validation";
import { Link } from "react-router-dom";
import sign from "../../assets/sign.png"; // Import the image directly

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="Login-popup">
      <form
        action=""
        className="Login-popup-container"
        onSubmit={handleValidation}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <div className="login-popup-inputs">
              <input
                type="text"
                placeholder="your name"
                name="name"
                onChange={handleInput}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="your email"
            onChange={handleInput}
          />
          {errors.email && <span className="err">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
          />
          {errors.password && <span className="err">{errors.password}</span>}
        </div>

        <button type="submit">
          {currState === "Sign Up" ? (
            <Link to={"/Home"}>Create account</Link>
          ) : (
            <Link to={"/Home"}>Login</Link>
          )}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, I Agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ?
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
