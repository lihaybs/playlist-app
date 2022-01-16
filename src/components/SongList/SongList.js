import Song from "../Song/Song";
import "./SongList.css";

const SongList = ({ songList, deletSong, play }) => {
    return <div className="songs">
        {songList.map(({ id, name, artist, http }) => (
            <Song key={id} id={id} name={name} artist={artist} deletSong={deletSong} http={http} play={play} />
        ))}
    </div>
};


export default SongList