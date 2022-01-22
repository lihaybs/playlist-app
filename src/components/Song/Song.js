import './Song.css'
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Song = ({ id, title, duration, thumbnails_url, deletSong, url, play }) => {
    return (
        <Container >

            <div className="Song-card" >
                <div className="song">
                    <Button className="btn btn-success btn-lo try" onClick={() => play(url)}> ⏯ </Button>
                    <Button onClick={() => deletSong(id)}>❌</Button>
                    <img src={thumbnails_url} alt="" />
                    <label className="title" title={title}>
                        {title} {duration}
                    </label>
                </div>
            </div>
        </Container>
    );
};

export default Song