function geocodeAddress() {
    const address = document.getElementById("tourism").value;
    if (!address || address.length < 3) {
      document.getElementById("status").textContent = "The address string is too short. Enter at least three symbols";
      return;
    }
  
    const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_KEY}`;
  
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
  
  
  