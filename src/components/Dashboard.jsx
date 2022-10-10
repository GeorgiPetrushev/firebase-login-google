import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConf";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const handleOnClick = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );

  if (loading) {
    return <h1>loading ...</h1>;
  }

  return (
    <div>
      <div>Welcome: {user.displayName}</div>

      <button
        onClick={() => {
          handleOnClick();
          auth.signOut();
        }}
      >
        Sing Out
      </button>
    </div>
  );
};

export default Dashboard;
