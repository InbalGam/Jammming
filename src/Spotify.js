const url = 'https://accounts.spotify.com/api/token';


async function searchSpotify(query, type, token) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
    const response = await fetch(url, {method: 'GET',
                                       headers: {'Authorization': `Bearer ${token}`}});                                   
    const jsonData = await response.json();
    return jsonData;
};


async function getUserId(token) {
    const url = `https://api.spotify.com/v1/me`;
    const response = await fetch(url, {method: 'GET',
                                       headers: {'Authorization': `Bearer ${token}`}}); 
    const jsonData = await response.json();
    return jsonData.id;
};


async function addToPlaylist(tracksToSave, playlistId, token) {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const response = await fetch(url, {method: 'POST',
                                       headers: {'Authorization': `Bearer ${token}`,
                                                 'Content-Type': 'application/json'},
                                       body: JSON.stringify({
                                        "uris": tracksToSave,
                                        "position": 0
                                            })}); 
};


async function createPlaylist(playlistName, token) {
    const userId = await getUserId(token);
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const response = await fetch(url, {method: 'POST',
                                       headers: {'Authorization': `Bearer ${token}`,
                                                 'Content-Type': 'application/json'},
                                       body: JSON.stringify({
                                        "name": playlistName,
                                        "description": "New playlist description",
                                        "public": true
                                            })});
    const jsonData = await response.json();
    return jsonData.id;
};


export {searchSpotify, addToPlaylist, createPlaylist};