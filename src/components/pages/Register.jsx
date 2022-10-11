import React,{useState} from "react";
import { Link } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebaseConf";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPasswords, setRegisterPassword] = useState("");
  let navigate = useNavigate();

  const registerForm = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPasswords);
      console.log(user);
      navigate("../dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="User" onChange={(e)=> setRegisterEmail(e.target.value)} value={registerEmail}></input>
      <input placeholder="password" onChange={(e)=> setRegisterPassword(e.target.value)} value={registerPasswords}></input>
      <button onClick={registerForm}>Register</button>
      <Link to="/login">Go back</Link>
    </div>
  );
};

export default Register;
