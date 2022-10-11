import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConf";
import { useNavigate } from "react-router-dom";
import RegisterStyle from "../../style/RegisterStyle";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPasswords, setRegisterPassword] = useState("");
  let navigate = useNavigate();

  const registerForm = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPasswords
      );
      console.log(user);
      navigate("../dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RegisterStyle>
      <h1>Register</h1>
      <input
        placeholder="User"
        onChange={(e) => setRegisterEmail(e.target.value)}
        value={registerEmail}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
        value={registerPasswords}
      ></input>
      <button onClick={registerForm} className="register-btn">
        Register
      </button>
      <br />
      <br />
      <Link to="/login">Go back</Link>
    </RegisterStyle>
  );
};

export default Register;
