import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebaseConf";
import LoginStyle from "../../style/LoginStyle";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswords, setLoginPassword] = useState("");

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.displayName);
      navigate("/firebase-login-google/dashboard");
    } catch (error) {
      console.log(error.massage);
    }
  };

  const loginEmailPass = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPasswords
      );
      console.log(user);
      navigate("/firebase-login-google/dashboard");
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  return (
    <LoginStyle>
      <div>Login</div>
      <br />
      <div>Sing in with one of the options</div>
      <div className="login-pass">
        <input
          placeholder="User"
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPasswords}
        ></input>
        <button onClick={loginEmailPass} className="login-btn">
          Login
        </button>
        <br />
      </div>
      <div>or</div>
      <div className="google-btn-container">
        <FcGoogle />
        <button onClick={GoogleLogin} className="google-btn">
          Sing in with your Google account
        </button>
      </div>
      <br />
      <br />

      <div>
        If you don`t have account <Link to="/firebase-login-google/login/register"> Click Here </Link> to register.
      </div>
    </LoginStyle>
  );
};

export default Login;
