import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <input placeholder="User"></input>
      <input placeholder="password"></input>
      <button>Register</button>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Register;
