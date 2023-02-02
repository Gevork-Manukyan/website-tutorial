import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import "./Login.css";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient.login({
      email,
      password
    })
  };

  return (
    <form className="user-login-form" onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <input
        id="email"
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="password"
        className="form-input"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default Login;
