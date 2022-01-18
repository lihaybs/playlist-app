
import './App.css';
import SongList from './components/SongList/SongList';
import SongChoise from "./components/SongChoise/SongChoise"
import Header from './components/Header/Header';
import AddItemsForm from './components/AddItemForm/AddItemForm';
import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import SoundCloudPlayer from 'react-player/soundcloud';

function App() {
  const [http, setHttp] = useState("https://www.youtube.com/watch?v=z-nMADrwC2c")
  const [songChoise, setSongChoise] = useState([])
  const [songList, setSongList] = useState([])
  const cardShow = useRef(0)
  console.log(cardShow.current);

  useEffect(() => {
    getAllSong()
  }, []);

  const getAllSong = () => {
    fetch(`http://localhost:3001/songs`)
      .then((res) => res.json())
      .then((data) => {
        setSongList(data)
        console.log(data)
      })
  }

  const searchSong = (text) => {
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${text}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "0e4f334be8mshcf8e732f1d50efep175f18jsn28fd03bda402"
      }
    })
      .then(res => res.json())
      .then(data => {
        let songs = data.items.filter(song => song.type === "video");
        console.log(songs)
        cardShow.current++
        setSongChoise(songs)
      })
      .catch(err => {
        console.error(err);
      });
  }

  const AddSongToTheLIst = (id) => {
    const song = songChoise.find(song => song.id === id)
    const newSong = {
      title: song.title,
      id: song.id,
      url: song.url,
      thumbnails_url: song.thumbnails[0].url,
      views: song.views,
      duration: song.duration,
      uploadedAt: song.uploadedAt,
      playlist: ["all"]
    };
    fetch(`http://localhost:3001/songs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newSong),
    });
    cardShow.current--
    getAllSong();
  }

  const deletSong = (id) => {
    fetch(`http://localhost:3001/songs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    });
    getAllSong();
  }


  const play = (http) => {
    setHttp(http)
  }

  return (
    <div className="App" >
      <Header />
      <AddItemsForm searchSong={searchSong} />
      <SongChoise songChoise={songChoise} AddSongToTheLIst={AddSongToTheLIst} cardShow={cardShow}></SongChoise>}
      <SongList songList={songList} deletSong={deletSong} play={play} />
      <ReactPlayer url={http} />
    </div>
  );
}

export default App;
