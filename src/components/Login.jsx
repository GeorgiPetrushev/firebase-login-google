import React from "react";
import { useNavigate } from "react-router-dom";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebaseConf";

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
      <button onClick={GoogleLogin}>Sing in with your Google account</button>
      <button>Sing in with your FaceBook account</button>
    </div>
  );
};

export default Login;
