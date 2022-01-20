import { useRef } from "react"

export default function AddItemsForm({ searchSong }) {
    const val = useRef();
    return (<div>
        <input className="input search-input" ref={val} />
        <button onClick={() => searchSong(val.current.value)}> ➕ </button>
    </div>)
}