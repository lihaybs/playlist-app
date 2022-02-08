
import './App.css';
import SongList from './components/SongList/SongList';
import SongChoise from "./components/SongChoise/SongChoise"
import Header from './components/Header/Header';
import AddItemsForm from './components/AddItemForm/AddItemForm';
import { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './components/Pages/Login/Login'
import Home from './components/Pages/Home/Home'

// import ReactPlayer from 'react-player';
// import Plyr from 'react-plyr';
import Plyr from "plyr-react";
import 'plyr-react/dist/plyr.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminContext from './Context/AdminContext';
import api from './Controller/axiosReq';
// import SoundCloudPlayer from 'react-player/soundcloud';

// function App() {
//   const [http, setHttp] = useState("z-nMADrwC2c")
//   const [songChoise, setSongChoise] = useState([])
//   const [songList, setSongList] = useState([])
//   const [loginDetails, setLoginDetails] = useState({ username: "yosi", password: "12345" })
//   const [cardShow, setCardShow] = useState(false);
//   const [loginShow, setLoginShow] = useState(true);

//   useEffect(() => {
//     localStorage.accessToken = false
//   }, []);


//   const signUp = () => {
//     fetch(`http://localhost:3001/user/register`, {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(loginDetails),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.accessToken)
//         localStorage.accessToken = data.accessToken;
//         getAllSong()

//       })
//   }


//   const getAllSong = () => {
//     if (localStorage.accessToken === "undefined") return localStorage.accessToken = "";
//     setLoginShow(false);
//     fetch(`http://localhost:3001/songs`, {
//       method: 'GET',
//       headers: {
//         "content-type": "application/json",
//         "authorization": `bearer ${localStorage.accessToken}`
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setSongList(data)
//       })
//   }

//   const searchSong = (text) => {
//     fetch(`http://localhost:3001/api/search/${text}`)
//       .then(res => res.json())
//       .then(data => {
//         // let songs = data.items.filter(song => song.type === "video");
//         console.log(data)
//         setCardShow(true)
//         setSongChoise(data)
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }

//   const AddSongToTheLIst = (id) => {
//     if (!localStorage.accessToken) return localStorage.accessToken = "";
//     const song = songChoise.find(song => song.id === id)
//     const newSong = {
//       title: song.title,
//       id: song.id,
//       url: song.url,
//       thumbnails_url: song.thumbnails[0].url,
//       views: song.views,
//       duration: song.duration,
//       uploadedAt: song.uploadedAt,
//       playlist: ["all"]
//     };
//     fetch(`http://localhost:3001/songs`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "authorization": `bearer ${localStorage.accessToken}`
//       },
//       body: JSON.stringify(newSong)
//     }).then(() => {
//       setCardShow(false)
//       getAllSong()
//     })

//   }

//   const deletSong = (id) => {
//     try {
//       fetch(`http://localhost:3001/songs/${id}`, {
//         method: 'DELETE',
//         headers: {
//           "content-type": "application/json",
//           "authorization": `bearer ${localStorage.accessToken}`
//         },

//       })
//         .then((res) => res.json())
//         .then(data => {
//           console.log(data);
//           getAllSong()
//         })
//     } catch (error) {
//       alert(error.message)
//     }
//   }

//   const userName = (input) => {
//     setLoginDetails({ password: loginDetails.password, username: input });
//   };
//   const password = (input) => {
//     setLoginDetails({ username: loginDetails.username, password: input });
//   };


//   const login = () => {
//     fetch(`http://localhost:3001/user/login`, {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(loginDetails),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         localStorage.accessToken = data.accessToken;
//         console.log(localStorage.accessToken)
//         getAllSong()
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }



//   // const play = (http) => {
//   //   setHttp(http)
//   // }
//   const play = (id) => {
//     setHttp({
//       type: "video",
//       sources: [
//         {
//           src: id,
//           provider: "youtube",
//         },
//       ],
//     });
//   };

//   return (
//     <div className="App" >
//       <Header login={login} userName={userName} password={password} signUp={signUp} loginShow={loginShow} loginDetails={loginDetails} />
//       <AddItemsForm songList={songList} searchSong={searchSong} />
//       <SongChoise songChoise={songChoise} AddSongToTheLIst={AddSongToTheLIst} cardShow={cardShow}></SongChoise>
//       <SongList songList={songList} deletSong={deletSong} play={play} />
//       {/* <plyr className="song-player" videoId={http} /> */}
//       <div className="song-player">
//         <Plyr source={http} />
//       </div>
//     </div>
//   );
// }

// export default App;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

function App() {

  const [login, setLogin] = useState(Boolean(localStorage.PLaccessToken));

  const clear = () => {
    localStorage.clear("PLaccessToken");
    setLogin(Boolean(localStorage.PLaccessToken));
  }
  const handleLogin = async (event) => {
    if (event === 0) { return clear() }
    event.preventDefault();
    if (!localStorage.PLaccessToken) {
      const data = new FormData(event.currentTarget);
      const body = { username: data.get('email'), password: data.get('password') }
      const res = await api.post("/user/login", body);
      localStorage.PLaccessToken = res.data.accessToken;
      api.defaults.headers.common["Authorization"] = `bearer ${localStorage.PLaccessToken}`;
      setLogin(Boolean(localStorage.PLaccessToken))
    } else {
      clear()
    }
  }







  return (
    <>
      <div className="app">
        <AdminContext.Provider value={{ handleLogin, login }}>
          <Router>

            <div >
              <Routes>
                <Route path="/" element={login ? <Navigate to="/Home" /> : <Navigate to="/login" />} />
                <Route path="/login" element={localStorage.PLaccessToken ? <Navigate to="/Home" /> : <Login />} />
                <Route path="/Home" element={<Home />} />
              </Routes>
            </div>
          </Router>
        </AdminContext.Provider>
      </div>
    </>
  )
}

export default App;
