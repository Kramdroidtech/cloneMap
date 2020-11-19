const successPosition = (pos) => {
  const { latitude,longitude } = pos.coords;
  displayMap([longitude,latitude]);
}

const failedPosition = (err) => {
  console.log(err)
}

navigator.geolocation.getCurrentPosition(successPosition,failedPosition,{
  enableHighAccuracy: true
});

mapboxgl.accessToken = 'pk.eyJ1Ijoia3JhbWRyb2lkdGVjaCIsImEiOiJja2huZ3ZxYngwMWh3MnRvN2l6aHlsbHJlIn0.cI_0aTjGyz1xD9cova4nKA';

const displayMap = (center) => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  });
  
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
}