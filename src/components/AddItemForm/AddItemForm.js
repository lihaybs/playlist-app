import { useRef } from "react"

export default function AddItemsForm({ AddSongToTheLIst }) {
    const val = useRef();
    return (<div>
        <input ref={val} />
        <button onClick={() => AddSongToTheLIst(val.current.value)}> ➕ </button>
    </div>)
}