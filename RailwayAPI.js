
document.getElementById('input').addEventListener("submit",(event)=>{
	event.preventDefault()
  })
  
  let API_KEY2='72dec3e203msh9cd9c2ee8e84098p16e85fjsn666e1ee7db2e';
  //Now,making a function which requests data about entered place
  
  
  
  //Making a function searchSpots() which gets the value entered by user
  
  searchTrain=()=>{
	location.replace("https://www.irctc.co.in/nget/train-search");
	const source=document.getElementById('source').innerText;
	const dest=document.getElementById('destination').innerText;
	
	const URL = 'https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU';
	const FULL_URL = `${URL}?q=${source,dest}&appid=${API_KEY}&units=imperial`;
	const weatherPromise  = fetch(FULL_URL);
	return weatherPromise.then((response) => {
		return response.json();
		
		
	document.getElementById('Train').innerText=FeatureCollection.data[0].name;
  });
  
  
  
	//document.getElementById('address').innerText=FeatureCollection.features[1].properties.formatted;
}
