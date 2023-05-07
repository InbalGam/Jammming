const authorizationVar = 'MDIwNmUxNzE0MTRmNGZlMjhhYTQyNjM1Y2I0MDcyMWU6ZmJmMGFkYTU5NTE0NDBmYTljNTg4YzQ1ZDIzZGM4MWU='
// var client_id = '0206e171414f4fe28aa42635cb40721e';
// var client_secret = 'fbf0ada5951440fa9c588c45d23dc81e';
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