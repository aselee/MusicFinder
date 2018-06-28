
// fetch artists songkick api

export function fetchArtists() {
    return function (dispatch) {
      dispatch({
        type: "FETCH_ARTISTS"
      });

      fetch("https://api.songkick.com/api/3.0/artists/2395485/gigography.json?apikey=APm3qeoeRxB2Ixuv")
      .then( (response) => {
        return response.json();
      }).then((artists) => {
        dispatch(artistsLoaded(artists));
        console.log(artists);
      });

    };
   }

export function artistsLoaded(artists) {
    return {
      type: "ARTISTS_LOADED",
      value: artists
    };
}

export function updateArtist(artists) {
    return function(dispatch){
      fetch('https://api.songkick.com/api/3.0/artists/2395485/gigography.json?apikey=APm3qeoeRxB2Ixuv',{
        method: 'post',
        body: JSON.stringify(artists),
        headers: {
            "Content-Type": "application/json"
        }
      }).then(function(res){
        return res.json();
      }).then(function(a){
        dispatch(artistUpdated(a));
     });
    };
};

export function artistUpdated(artists) {
    return {
        type: "ARTIST_UPDATED",
        value: artists
    };
}

// line