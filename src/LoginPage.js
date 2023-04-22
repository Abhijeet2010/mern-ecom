import React, { useState } from "react";
import { Button } from "./styles/Button";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LoginPage.css";
import { login } from "./Slices/authSlice";

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    try {
      const result = await response.json();
      if (response.ok) {
        alert("okk");
        setRedirect(true);
        setEmail("");
        setPassword("");
        dispatch(login(result));
      } else {
        alert("Wrong details");
      }
    } catch (error) {
      alert("wrong credentials");
    }
  };

  if (redirect) {
    setIsAuthenticated(true);
    return <Navigate to={"/"} />;
  }

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          className="input"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <Button className="btnnn" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
