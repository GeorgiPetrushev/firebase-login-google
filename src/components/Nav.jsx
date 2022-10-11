import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebaseConf";
import NavStyle from "../style/NavStyle";
import {AiOutlineHome} from "react-icons/ai"

const Nav = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>loading ...</h1>;

  return (
    <NavStyle>
      <div>
        <Link to="/" className="home-icon"> <AiOutlineHome/><div className="home">Home</div></Link>
      </div>
      {!user && (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )}
      {user && (
        <div>
          <Link to="/dashboard">
            <img src={user.photoURL} alt="Missing info"></img>
          </Link>
        </div>
      )}
    </NavStyle>
  );
};

export default Nav;
