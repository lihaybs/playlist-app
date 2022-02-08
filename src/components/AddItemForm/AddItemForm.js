import { useRef } from "react"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AddItemsForm({ songList, searchSong }) {
    const val = useRef();
    return (<div className="inputs-box">
        <input className="input search-input" ref={val} />
        <button onClick={() => searchSong(val.current.value)}> ➕ </button>
        <div>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={songList.map((song) => { return song.title })}
                sx={{ width: "300px", backgroundColor: "red", position: "absolute", top: 0, left: 0 }}
                renderInput={(params) => <TextField {...params} label="Song" />}
            />
        </div>



    </div>)
}