import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConf";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswords, setLoginPassword] = useState("");

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.displayName);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.massage);
    }
  };

  const loginEmailPass = async () =>{
    try {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPasswords);
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message,error.code);
    }
  }

  return (
    <div>
      <div>Test Login</div>
      <div>Sing in with one of the options</div>
      <div className="login-pass">
      <input placeholder="User" onChange={(e)=> setLoginEmail(e.target.value)} value={loginEmail}></input>
      <input placeholder="password" onChange={(e)=> setLoginPassword(e.target.value)} value={loginPasswords}></input>
        <button onClick={loginEmailPass}>Login</button>
        <br />
      </div>
      <div>or</div>
      <button onClick={GoogleLogin}>Sing in with your Google account</button>
      <br />
      <Link to="/login/register">Register</Link>
    </div>
  );
};

export default Login;
