import React, { useState } from "react";
import apiClient from "../../services/apiClient";
import "./Register.css";

const Register = function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [status, setStatus] = useState(undefined)

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password === confirmPassword) {
      console.log("Successful Registration!");
      const {data, error} = await apiClient.register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      })

      if (data !== null) {
        setStatus(true)
      } else if (error !== null) {
        setStatus(false)
      }

    } else {
      setStatus(false)
      console.error("Passwords do not match!");
    }
  };

  return (
    <form className="user-registration-form" onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <input
        id="firstName"
        className="form-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        id="lastName"
        className="form-input"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
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
      <input
        id="confirmPassword"
        className="form-input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      {status === true ?
        <p>Successfully Registered!</p>
        :
        (status === false ?
          <p>Failed to Register</p>
          :
          <></>
        )
      }
      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default Register;
