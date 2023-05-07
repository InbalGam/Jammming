import Tracklist from "./Tracklist";
import styles from '../components/styles/SearchResults.css';

function Results(props) {
    return (
        <div className="search_results" >
            <div className="results_p">
                <p>Results</p>
            </div>
            <ul>
            <Tracklist tracks={props.tracks} button={'+'} onButtonClick={props.onButtonClick} />
            </ul>
        </div>
    );
};

export default Results;