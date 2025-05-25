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
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home1";
import About from "./About1";
import Contact from "./Contact1";
import Player from "./Components/Player";

const songs = [
  {
    title: "Forget me too ft. Halsey",
    artist: "Machine Gun Kelly",
    img_src: "https://via.placeholder.com/250",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    img_src: "https://via.placeholder.com/250",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    img_src: "https://via.placeholder.com/250",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

class App extends React.Component{
  state = {
    currentSongIndex: 0,
    nextSongIndex: 1
  };

  setCurrentSongIndex = (indexFn) => {
    this.setState((prevState) => {
      const newIndex = typeof indexFn === 'function' ? indexFn(prevState.currentSongIndex) : indexFn;
      return {
        currentSongIndex: newIndex,
        nextSongIndex: (newIndex + 1) % songs.length
      };
    });
  };

  render(){
    return(
      <Router>
        <div><StyledLink to="/">Home</StyledLink></div>
        <div><StyledLink to="/about">About Us</StyledLink></div>
        <div><StyledLink to="/contact">Contact Us</StyledLink></div>
        <div><StyledLink to="/music">Music Player</StyledLink></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/music" element={
            <Player
              currentSongIndex={this.state.currentSongIndex}
              setCurrentSongIndex={this.setCurrentSongIndex}
              nextSongIndex={this.state.nextSongIndex}
              setNextSongIndex={() => {}}
              songs={songs}
            />
          } />
        </Routes>
      </Router>
    );
  }
}

export default App;

