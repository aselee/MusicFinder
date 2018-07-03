
// fetching events
export function fetchEvents() {
  return function (dispatch) {

    fetch(`https://api.songkick.com/api/3.0/artists/82317/calendar.json?apikey=APm3qeoeRxB2Ixuv`)
    .then( (response) => {
      return response.json();
    }).then((events) => {
      // debugger;
      dispatch(eventsLoaded(events.resultsPage.results.event));
      console.log("fetched artists", events);
    });
  };
 }

 export function onFormSubmit(artistId) {
  return function (dispatch) {

    fetch(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=APm3qeoeRxB2Ixuv`)
    .then( (response) => {
      return response.json();
    }).then((events) => {
      dispatch(eventsLoaded(events.resultsPage.results.event || []));
      // console.log("fetched artists", events);
    });
  };
 }

export function eventsLoaded(events) {
  return {
    type: "EVENTS_LOADED",
    value: events
  };
}

export function updateEvent(events) {
  return function(dispatch){
    fetch(`https://api.songkick.com/api/3.0/artists/82317/calendar.json?apikey=APm3qeoeRxB2Ixuv`,{
      method: 'post',
      body: JSON.stringify(events),
      headers: {
          "Content-Type": "application/json"
      }
    }).then(function(res){
      return res.json();
    }).then(function(a){
      dispatch(eventUpdated(a));
   });
  };
};

export function eventUpdated(events) {
  return {
      type: "EVENT_UPDATED",
      value: events
  };
}