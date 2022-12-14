import Nav from "./components/Nav";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppStyle from "./style/AppStyle";

const App = () => {
  return (
    <AppStyle>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/firebase-login-google" element={<About />} />
          <Route exact path="/firebase-login-google/login" element={<Login />} />
          <Route exact path="/firebase-login-google/login/register" element={<Register />} />
          <Route exact path="/firebase-login-google/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppStyle>
  );
};

export default App;
