import React, {useState}
 from "react";
 import './App.css'
 import Quote from "./Quote";
 
//  this component displays the weather of the current location youre looking for,
//  by using api weather. 
 const Weather =()=>{
    const apiKey = 'e21dbda43c53636bdf8014cf721475b2'//the access key from my api app
    const [weatherData, setWeatherData]= useState({})//the data of the weather, taken from api
    const[city,setCity]= useState("")

    const getWeather = (event)=>{
        if(event.key === "Enter")//checks if i clicked enter and willing to find the weather
        {
            // we using fetch method when we want to request some data from a server(like api).
            //  we enter the url and then response.json return a promise that the body text resolved as json
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(     
                data => {
                    setWeatherData(data)
                   
                }
            )

         }
       
    }
    return(
        <div className="container"><input className="input"
        placeholder="Enter city..."
        onChange={e => setCity(e.target.value)}
        value = {city}
        onKeyPress={getWeather}></input>
        {typeof weatherData.main === 'undefined' ?(
           <div>
               <p>enter weather</p>
               </div>
        ):(
           <div className="weather-data">
               <p className="city">{weatherData.name}</p>
               <p className="temp">{Math.round(weatherData.main.temp)}F</p>
               <p className="weather">{weatherData.weather[0].main}</p>
           </div>

        )}
        {weatherData.cod==="404" ?(
           <p>City not found.</p>
        ):(
           <></>
        )}
        <div className="Quote"><Quote/></div>
        </div>

    );

 }
    export default Weather
