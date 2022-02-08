import "./SongChoise.css"
import Choice from "../Choice/Choice.js"
const SongChoise = ({ songChoise, AddSongToTheLIst, cardShow }) => {


    const element = document.querySelector(".SongChoise");
    if (element) {

        element.addEventListener('wheel', (event) => {
            event.preventDefault();

            element.scrollBy({
                left: event.deltaY < 0 ? -30 : 50,

            });
        });
    }
    return (cardShow && <div className="SongChoise">
        <button type="button" className="close-btn">❌</button>
        {songChoise.map(({ title, id, url, duration, uploadedAt, thumbnails }) =>
            <Choice key={id} title={title} id={id} url={url} duration={duration} uploadedAt={uploadedAt} thumbnails_url={thumbnails[0].url} AddSongToTheLIst={AddSongToTheLIst} ></Choice>
        )}
    </div>)
}



export default SongChoise