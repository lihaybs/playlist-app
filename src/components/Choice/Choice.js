import "./Choice.css";

export default function Choise({ title, id, url, duration, uploadedAt, thumbnails_url, AddSongToTheLIst }) {

    return <div onClick={() => AddSongToTheLIst(id)}>
        <img src={thumbnails_url} alt={title}></img>
        <label>{title}</label>
        <span>{duration}</span>
    </div>
}

