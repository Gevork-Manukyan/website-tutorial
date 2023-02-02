import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password === confirmPassword) {
      console.log("Successful Registration!");
    } else {
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
      <button type="submit" className="form-button">
        Register
      </button>
    </form>
  );
};

export default Register;
