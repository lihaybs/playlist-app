import Song from "../Song/Song";
import "./SongList.css";

const SongList = ({ songList, deletSong, play }) => {
    return <div className="songs">
        {songList.map(({ _id, id, title, duration, thumbnails_url, url }) => (
            <Song key={_id} id={id} title={title} duration={duration} thumbnails_url={thumbnails_url} url={url} deletSong={deletSong} play={play} />
        ))}
    </div>
};


export default SongList


