import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebaseConf";

const Nav = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>loading ...</h1>;

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <div>
            <Link to="/dashboard">
              {/* <img src={user.photoURL} alt=""></img> */}
              <h1>hi</h1>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Nav;
