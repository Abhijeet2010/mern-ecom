import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./Slices/authSlice";
import { Navigate } from "react-router-dom";
import { Button } from "./styles/Button";
import "./RegisterPage.css";

const RegisterPage = ({ setIsAuthenticated }) => {
  const dispatch = useDispatch();
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const result = { ...registerUser, [name]: value };
    setRegisterUser(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/register", {
      method: "POST",
      body: JSON.stringify(registerUser),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("registration success");

      dispatch(login(registerUser.username));
    } else {
      alert("registration failed");
      return <Navigate to={"/register"} />;
    }
    setRedirect(true);
    setRegisterUser({ username: "", email: "", password: "" });
    // setIsAuthenticated(true);
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="registerPage">
      <h2>Register Page</h2> <br />
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter your username"
          name="username"
          value={registerUser.username}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          className="input"
          type="email"
          placeholder="Enter email"
          name="email"
          value={registerUser.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          className="input"
          type="password"
          placeholder="enter your password"
          name="password"
          value={registerUser.password}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <Button className="btnnn" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
