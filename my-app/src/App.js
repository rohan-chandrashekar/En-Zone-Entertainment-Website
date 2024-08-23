/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/

import logo from './logo.svg';
import './App.css';
import {StyledLink} from "./styles.js"
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home1";
import About from "./About1";
import Contact from "./Contact1";

class App extends React.Component{
  render(){
    return(
      <Router>
        <div><StyledLink to="/">Home</StyledLink></div>
        <div><StyledLink to="/about">About Us</StyledLink></div>
        <div><StyledLink to="/contact">Contact Us</StyledLink></div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
        </Router>
    );
  }
}

export default App;

