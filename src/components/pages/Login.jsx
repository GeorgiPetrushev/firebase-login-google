import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebaseConf";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  let navigate = useNavigate();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.displayName);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>Test Login</div>
      <div>Sing in with one of the options</div>
      <input placeholder="User"></input>
      <input placeholder="password"></input>
      <button>Login</button><br/>
      <div>or</div>
      <button onClick={GoogleLogin}>Sing in with your Google account</button>
      <br />
      <Link to="/login/register">Register</Link>
    </div>
  );
};

export default Login;
