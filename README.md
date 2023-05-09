# Jammming
## A Frontend project in Codecademy Fullstack course

The purpose of this project was to create an app that uses Spotify API in order to allow users to create their own playlist.
After the user log in to their Spotify account he can search for a song and add the relevant songs to a new playlist.
The user can also search for an artist, however the playlist will not save properly as Spotify doesn't support this (I added the artist search for my own practice).

The main APP (APP.js) consists of 3 components- the search bar, search results and playlist creation.
The main functions for- **adding tracks** to the playlist or **removing them** from it and adding them back to the results are also in APP.js.
As well as **getting the tracks data** in order to create the playlist in the user Spotify account.
The _access token_ was retrieved using hash.


In Spotify.js there are the API functions for- search either by track/artist, getting userId, creating playlist and adding items to the playlist in the user Spotify account.

The search bar component gets 2 props- the tracks and the token.
In SearchBar.js the user can type what track/artist he wants to search for using a dropdown.
This component is using the search function from Spotify.js and thus needs the access token.
When there are search results the component is calling back the getTracks function from APP.js and then the Results component get access to them through props.

In SearchResults.js we get the tracks through props and a function 'addTrackToPlaylist' from APP.js to add tracks to the playlist & remove them from the results.

The Playlist component, called for in APP.js, recieves 4 props- the tracks added to playlist, the function removeTrackFromPlaylist, the reset function and the access token.
The function 'removeTrackFromPlaylist' from APP.js is for removing tracks from playlist and adding them back to the results.
The reset function will reset the playlist after it's saved.
Playlist needs the access token as it uses it for creating a playlist and adding tracks to is with the Spotify API functions.

Both Playlist and Result uses the Tracklist component.
The Tracklist component creates list items for each track, using the Track component.
The Tracklist component also adds a button to add/remove each track and the ability to audio a sample of the song.

The Track component shows each track information- song name, artist and album.

In utilities.js I created a function to generate ID to each track object.
