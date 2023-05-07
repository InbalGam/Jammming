import styles from '../components/styles/Track.css';

function Track(props) {
    return (
        <div className="track">
            <p className="songName">{props.type === 'Track' ? props.songName : props.artist}</p>
            <p className="artist_album">{props.type === 'Artist' ? '' : props.artist + ' | ' + props.album}</p>
        </div>
    );
};

export default Track;