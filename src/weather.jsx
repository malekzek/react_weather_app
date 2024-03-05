import React, { useState } from 'react'
import './style.css'
import Search_icon from './assets/search.png'
import clear_icon from './assets/clear.png'
import cloud_icon from './assets/cloud.png'
import drizzle_icon from './assets/drizzle.png'
import humidity_icon from './assets/humidity.png'
import rain_icon from './assets/rain.png'
import snow_icon from './assets/snow.png'
import wind_icon from './assets/wind.png'


function Weather(){
    let ApiKey="c9f6e2815e9c5fa9bae190916f693443";
    const [wicon,setWicon]=useState(cloud_icon);
    
    const search= async ()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value ===""){
            return 0;
        }
        const Api=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${ApiKey}`;
        const response=await fetch(Api);
        const data= await response.json();

        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName('wind-rate');
        const temp=document.getElementsByClassName('weather-temp');
        const location=document.getElementsByClassName('weather-location');

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+ " km/h";
        temp[0].innerHTML=data.main.temp+ '°';
        location[0].innerHTML=data.name;

        if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="o1n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="o2n"){
        setWicon(cloud_icon);
        }
        else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="o3n"){
        setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="o4n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="o9n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }
return(<div className='container'>
    <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search'></input>
        <div className='search-icon'>
         <img src={Search_icon} onClick={search}/>
         </div>
    </div>
    <div className='weather-image'>
        <img src={wicon}/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} className='icon'/>
                <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind_icon} className='icon'/>
                <div className='data'>
                    <div className='wind-rate'>18 km/h</div>
                    <div className='text'>Wind speed</div>
            </div>
        </div>
    </div>
</div>);
 
}

export default Weather