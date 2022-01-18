import './Song.css'
import { Container } from 'react-bootstrap';
const Song = ({ id, title, duration, thumbnails_url, deletSong, url, play }) => {
    return (
        <Container >

            <div className="Song" >
                <div className="song-image">
                    <img src={thumbnails_url} alt="" />
                </div>
                <div className="song">
                    <div> <button className="btn btn-success btn-lo try" onClick={() => play(url)}> ⏯ </button>  {title} {duration} <button onClick={() => deletSong(id)}>❌</button> </div>

                </div>
            </div>
        </Container>
    );
};

export default Song