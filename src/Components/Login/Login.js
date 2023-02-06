import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import "./Login.css";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(undefined)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {data, error} = await apiClient.login({
      email,
      password
    })

    if (data !== null) {
      setStatus(true)
    } else if (error !== null) {
      setStatus(false)
    }
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
      {status === true ?
        <p>Successfully Logged In!</p>
        :
        (status === false ?
          <p>Failed to Log In</p>
          :
          <></>
        )
      }
      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};

export default Login;
