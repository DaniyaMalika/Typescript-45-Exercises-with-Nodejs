function album(artist_name:string, album_title:string, tracks?:number){
    let album: {artist:string, title:string, tracks?:number} = {
        artist:artist_name,
        title:album_title,

    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}
//calling three functions with different values
let album1= album("Hamza","Album Title 1");
let album2= album("Ali","Album Title 2");
let album3= album("Aliyan","Album Title 3");
console.log(album1,album2,album3);
