import Nav from "./components/Nav";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
