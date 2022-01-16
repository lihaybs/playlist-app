import './Song.css'
import { Container } from 'react-bootstrap';
const Song = ({ id, name, artist, deletSong, http, play }) => {
    return (
        <Container >

            <div className="Song" id={id}>
                <div className="song-image">
                    {/* <img src={http} alt="" /> */}
                </div>
                <div className="song">
                    <div> <button className="btn btn-success btn-lo try" onClick={() => play(http)}> ⏯ </button>  {name} {artist} <button onClick={() => deletSong(id)}>❌</button> </div>

                </div>
            </div>
        </Container>
    );
};


export default Song