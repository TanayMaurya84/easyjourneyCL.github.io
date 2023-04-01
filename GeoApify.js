
/*document.getElementById('input').addEventListener("submit",(event)=>{
  event.preventDefault()
})
document.getElementById('places').addEventListener("submit",(event)=>{
  event.preventDefault()
})*/

let API_KEY='2786ac2cb206443eab3f16b49e3c1879';
//Now,making a function which requests data about entered place
searchSpots=()=>{
  location.replace('Tourism.html');
  const place=document.getElementById('destination').value;

  const URL = "https://api.geoapify.com/v2/places?categories=tourism&filter=place:51e77edeed25995540593867fb37adc73740f00101f90186e6970000000000c002099203204468616e6261642d43756d2d4b656e6475616469682d43756d2d4a6167617461&limit=20&apiKey=YOUR_API_KEY";
  
  fetch(URL).then(result => result.json())
    .then((FeatureCollection) =>{
      if (FeatureCollection.features.length === 0) {
        document.getElementById("status").textContent = "The address is not found";
        return;
      }
  
    
 /* getData(place)
  .then((FeatureCollection)=>{
    showPlaces(FeatureCollection);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}
getData=(place)=>{
  
  const FULL_URL = `${URL}?q=${place}&appid=${API_KEY}&units=imperial`;
  const FeatureCollection  = fetch(FULL_URL);
  return FeatureCollection.then((response) => {
    console.log(response.json());
  })

}
//Making a function searchSpots() which gets the value entered by user



/*
showPlaces=(FeatureCollection)=>{
  document.getElementById('nameofplace').innerText=FeatureCollection.features[0].properties.name;
  document.getElementById('address').innerText=FeatureCollection.features[0].properties ;
}
*/

    const details=FeatureCollection.features[0];
    document.getElementById("name").textContent=details.properties.name;
    document.getElementById("address").textContent=details.properties.formatted;

    document.getElementById("status").textContent = `Found address: ${details.properties.formatted}`;
  });
}

/*
function geocodeAddress() {
  const address = document.getElementById("address").value;
  if (!address || address.length < 3) {
    document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";
    return;
  }

  const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${myAPIKey}`;

  // call Geocoding API - https://www.geoapify.com/geocoding-api/
  fetch(geocodingUrl).then(result => result.json())
    .then(featureCollection => {
      if (featureCollection.features.length === 0) {
        document.getElementById("status").textContent = "The address is not found";
        return;
      }

      const foundAddress = featureCollection.features[0];
      document.getElementById("name").value = foundAddress.properties.name || '';
      document.getElementById("house-number").value = foundAddress.properties.housenumber || '';
      document.getElementById("street").value = foundAddress.properties.street || '';
      document.getElementById("postcode").value = foundAddress.properties.postcode || '';
      document.getElementById("city").value = foundAddress.properties.city || '';
      document.getElementById("state").value = foundAddress.properties.state || '';
      document.getElementById("country").value = foundAddress.properties.country || '';

      document.getElementById("status").textContent = `Found address: ${foundAddress.properties.formatted}`;
    });
    // Marker to save the position of found address
let marker;
function geocodeAddress() {



  // remove the previously added marker
  if (marker) {
    marker.remove();
  }

  fetch(geocodingUrl).then(result => result.json())
    .then(featureCollection => {

    

      // add a new marker and adjust the map view
      marker = L.marker(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon)).addTo(map);
      map.panTo(new L.LatLng(foundAddress.properties.lat, foundAddress.properties.lon));
    });
}
}

*/
