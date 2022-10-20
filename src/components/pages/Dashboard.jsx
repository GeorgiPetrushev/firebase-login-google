import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebaseConf";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardStyle from "../../style/DashboardStyle";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  let navigate = useNavigate();

  if (loading) {
    return <h1>loading ...</h1>;
  }

  if (!user) {
    return navigate("/firebase-login-google/login");
  }

  if (user)
    return (
      <DashboardStyle>
        <div>Welcome: {user.displayName}</div>
        <br></br>
        <button
          className="sing-out-btn"
          onClick={async () => {
            navigate("/firebase-login-google/login");
            auth.signOut();
          }}
        >
          Sing Out
        </button>
      </DashboardStyle>
    );
};

export default Dashboard;
