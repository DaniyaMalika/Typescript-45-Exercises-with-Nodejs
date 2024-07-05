function album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions with different values
var album1 = album("Hamza", "Album Title 1");
var album2 = album("Ali", "Album Title 2");
var album3 = album("Aliyan", "Album Title 3");
console.log(album1, album2, album3);
