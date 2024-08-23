import {useState, useEffect} from "react";
import Player from "./Components/Player";

function App() {  
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpeg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "/Users/rohan/Documents/Programming/Project/music-app/public/images/song-2.jpeg",
      src: "/Users/rohan/Documents/Programming/Project/music-app/public/music/somebody-new.mp3"
    },
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "/Users/rohan/Documents/Programming/Project/music-app/public/images/song-1.jpeg",
      src: "/Users/rohan/Documents/Programming/Project/music-app/public/music/on-n-on.mp3"
    },
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "/Users/rohan/Documents/Programming/Project/music-app/public/images/song-1.jpeg",
      src: "/Users/rohan/Documents/Programming/Project/music-app/public/music/on-n-on.mp3"
    }
  ]); 
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setCurrentSongIndex(() => {
      if (currentSongIndex +1 > songs.length-1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        setNextSongIndex={setNextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
