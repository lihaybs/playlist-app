import React from 'react';
import Plyr from 'plyr-react'
import { useState } from 'react'



export default function Home() {
    const [http, setHttp] = useState('KLmDgT7lQ88')
    const play = (id) => {
        setHttp({
            type: "video",
            sources: [
                {
                    src: id,
                    provider: "youtube",
                },
            ],
        });
    };

    return (
        <div className="home" >
            <button onClick={() => play(http)}>Play</button>
            {/* //           <Header login={login} userName={userName} password={password} signUp={signUp} loginShow={loginShow} loginDetails={loginDetails} />
        //           <AddItemsForm songList={songList} searchSong={searchSong} />
        //           <SongChoise songChoise={songChoise} AddSongToTheLIst={AddSongToTheLIst} cardShow={cardShow}></SongChoise>
        //           <SongList songList={songList} deletSong={deletSong} play={play} />
        //   {/* <plyr className="song-player" videoId={http} /> */}
            <div className="song-player">
                <Plyr source={http} />
            </div>
        </div>
    );
}

