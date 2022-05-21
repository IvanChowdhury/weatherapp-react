
import React, {useState} from "react"



function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=484e61bd085330a9485dd8587e04557f&units=metric`
   
   const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(url)
      const objectSentByAPI = await response.json()
      console.log(objectSentByAPI)
      setData(objectSentByAPI)
    }
    
  }

   
  return (
    <div className="app">
      <div className="search">
        <input 
         value={location}
         onChange={event => setLocation(event.target.value)}
         onKeyPress={searchLocation}
         placeholder='Enter Location'
         type="text"/>
      </div>
     <div className="container">
      <div className="top">
       <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{data.main.temp}°C</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>
    </div>
    <div className="bottom">
      <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null} 
        <p>Feels like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null} 
        <p>Humdity</p>
      </div>
      <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null} 
       <p>Wind Speed</p>
    </div>
   </div>
  </div>
 </div>
)
}

export default App;

