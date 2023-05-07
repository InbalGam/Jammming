import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';
import { useState, useEffect } from 'react';
import Playlist from './components/Playlist';
import {generateId} from './components/utilities';
import styles from './components/styles/App.css';

function App() {
  // Authentication to Spotify-
  const CLIENT_ID = '0206e171414f4fe28aa42635cb40721e';
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
    let token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    setToken(token);
    }
  }, []);
  
  //////////////////////////////////////////////////////////////////////////////

  const [tracks, setTracks] = useState([]);
  const [playTracks, setPlayTracks] = useState([]);


  function getTracks(searchResults) {
    let convertResults;
    if (searchResults.tracks) {
      convertResults = searchResults.tracks.items.map((el) => {
        return {
          id: generateId(),
          type: 'Track',
          songName: el.name,
          artist: el.artists[0].name,
          album: el.album.name,
          uri: el.uri
        }});
    } else if (searchResults.artists) {
      convertResults = searchResults.artists.items.map((el) => {
        return {
          id: generateId(),
          type: 'Artist',
          artist: el.name,
          uri: el.uri
        }});
    }
    setTracks(() => convertResults);
  };


  function addTrackToPlaylist(track) {
    setPlayTracks((prev) => [track, ...prev]);
    setTracks((tracks) => tracks.filter((el) => el.id !== track.id));
  };
  

  function removeTrackFromPlaylist(track) {
    setPlayTracks((playTracks) => playTracks.filter((el) => el.id !== track.id));
    setTracks((prev) => [track, ...prev]);
  };


  function reset() {
    setPlayTracks([]);
  };

  return (
    <div className="App">
      <body className="App-body">
        <div className='main_div'>
          {token === '' ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent('playlist-modify-public playlist-modify-private')}`}>Login to Spotify</a>
          :
          <div>
            <SearchBar getTracks={getTracks} token={token} />
            <div className='results_playlist'>
              <Results tracks={tracks} onButtonClick={addTrackToPlaylist} />
              <Playlist tracks={playTracks} onButtonClick={removeTrackFromPlaylist} reset={reset} token={token} />
            </div>
          </div>
          }
        </div>
      </body>
    </div>
  );
};

export default App;
