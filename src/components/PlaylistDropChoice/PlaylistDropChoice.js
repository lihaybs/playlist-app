import "./PlaylistDropChoice.css";

const PlaylistDropChoice = () => {


    return (<div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <form class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label class="dropdown-item"><input type="checkbox" name="" value="one" />First checkbox</label>
            <label class="dropdown-item"><input type="checkbox" name="" value="two" />Second checkbox</label>
            <label class="dropdown-item"><input type="checkbox" name="" value="three" />Third checkbox</label>
        </form>
    </div>
    )
}
export default PlaylistDropChoice