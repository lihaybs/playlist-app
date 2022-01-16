
import './App.css';
import SongList from './components/SongList/SongList';
import Header from './components/Header/Header';
import AddItemsForm from './components/AddItemForm/AddItemForm';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [http, setHttp] = useState("https://www.youtube.com/watch?v=z-nMADrwC2c")

  const [songList, setSongList] = useState([
    { id: 1, name: "קדם", artist: " ביני לנדאו ", http: "https://www.youtube.com/watch?v=z-nMADrwC2c" },
    { id: 2, name: "עוד פעם מחדש", artist: " שולי ועמיר ", http: "https://www.youtube.com/watch?v=NrhWmQk6DWA" },
    { id: 3, name: "מחרוזת יגל יעקב", artist: " משה בר ששת ", http: "https://www.youtube.com/watch?v=fp0SyCvhR0g" },
    { id: 4, name: " בר יוחאי יסוד עולם ", artist: "משה דוויק ", http: "https://www.youtube.com/watch?v=U_UYCOFDjIE" }
  ])
  const counter = useRef(4)
  console.log(counter.current)


  const AddSongToTheLIst = (newSong) => {
    counter.current++
    setSongList([...songList, { id: counter.current, name: newSong, artist: `artist${counter.current}` }])
  }
  const deletSong = (id) => {
    setSongList(songList.filter((song) => song.id !== id))
  }
  const play = (http) => {
    setHttp(http)
  }

  return (
    <div className="App" >
      <Header />
      <AddItemsForm AddSongToTheLIst={AddSongToTheLIst} />
      <SongList songList={songList} deletSong={deletSong} play={play} />
      <ReactPlayer url={http} />
    </div>
  );
}

export default App;
