import { useState } from 'react';
import {searchSpotify} from '../Spotify';
import Select from 'react-select';
import styles from '../components/styles/SearchBar.css';

function SearchBar(props) {
    const [text, setText] = useState('');
    const [searchType, setSearchType] = useState('track');
    const options = [{value: 'track', label: 'Track name'}, {value: 'artist', label: 'Artist name'}];

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(event) {
       event.preventDefault();
       const results = await searchSpotify(text, searchType, props.token);
       props.getTracks(results);
    };


    function handleSelectChange(choice) {
        setSearchType(choice.value);
    };


    return (
        <div className="search_bar">
            <form onSubmit={search} >
                <label for='search' >Search for music </label>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' className='search_input'/>
                <Select defaultValue={options[0]} options={options} onChange={handleSelectChange} className='select' />
                <input type="submit" value="Submit" className='submit' />
            </form>
        </div>
    );
};

export default SearchBar;