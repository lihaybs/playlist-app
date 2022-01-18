import "./SongChoise.css"
import Choice from "../Choice/Choice.js"
const SongChoise = ({ songChoise, AddSongToTheLIst, cardShow }) => {

    return cardShow.current && <div className="SongChoise">
        {songChoise.map(({ title, id, url, duration, uploadedAt, thumbnails }) =>
            <Choice key={id} title={title} id={id} url={url} duration={duration} uploadedAt={uploadedAt} thumbnails_url={thumbnails[0].url} AddSongToTheLIst={AddSongToTheLIst} ></Choice>
        )}
    </div>
}


export default SongChoise