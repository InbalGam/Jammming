import Track from "./Track";
import styles from '../components/styles/Tracklist.css';

function Tracklist(props) {

    // function preview(i) {
    //     let audio = props.tracks[i].preview_url;
    // }

    return (
        props.tracks.map((el, ind) => 
                        <li key={ind}> 
                        {/* <Track songName={el.songName} artist={el.artist} album={el.album} type={el.type} /> <button onClick={() => props.onButtonClick(el)}> {props.button} </button>  */}
                        <div className="track_div"> <Track songName={el.songName} artist={el.artist} album={el.album} type={el.type} /> <audio src={el.preview_url} controls/> <button onClick={() => props.onButtonClick(el)} className="tracklistButton"> {props.button} </button> </div>
                        </li>)
    );
};

export default Tracklist;