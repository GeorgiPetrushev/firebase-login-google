import Nav from "./components/Nav";
import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav /> 
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default App;
