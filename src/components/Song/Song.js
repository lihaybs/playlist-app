import './Song.css'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PlaylistDropChoice from '../PlaylistDropChoice/PlaylistDropChoice';
const Song = ({ id, title, duration, thumbnails_url, deletSong, url, play }) => {
    return (


        <div className="Song-card" title={title} >
            <div className="song-reaction">
                <Button className="song-btn btn-success btn-lo try" onClick={() => play(url)}> ⏯ </Button>
                <Button className="song-btn" onClick={() => deletSong(id)}>🗑</Button>
                <PlaylistDropChoice />
            </div>
            <img src={thumbnails_url} alt="" />
            <label className="title" title={title}>
                {title} {duration}
            </label>

        </div>

    );
};

export default Song