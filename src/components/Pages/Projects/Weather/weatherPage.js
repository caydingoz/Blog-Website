import React, { useState, useEffect } from 'react'
import './weather.css'
import Weather from './weather.js'
import SearchBar from './searchBar.js'

function WeatherPage() {
    let isMobile = window.innerWidth < 900;
    const tempCountry = 'Istanbul'
    const [country, setCountry] = useState(tempCountry);

    const currentWeather = {
        name: '',
        country: '',
        localTime: '',
        condition: '',
        icon: '',
        temp: '',
        humidity: '',
        wind: ''
    }
    const forecastWeather = [
        {
            date: '',
            condition: '',
            icon: '',
            temp: '',
        },
        {
            date: '',
            condition: '',
            icon: '',
            temp: '',
        }
    ]
    const [forecastweather, setForecastWeather] = useState(forecastWeather);
    const [currentweather, setWeather] = useState(currentWeather);

    const searchCountry = (searchCountry) => {
        setCountry(searchCountry);
        const key = '';
        const tempArr = []
        fetch('http://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + searchCountry + '&days=3')
            .then(res => res.ok ? res.json() : console.log("ERROR"))
            .then(function(data) {
                setWeather({
                    ...currentweather,
                    name: data.location.name,
                    country: data.location.country,
                    localTime: data.location.localtime,
                    condition: data.current.condition.text,
                    icon: '//cdn.weatherapi.com/weather/128x128/' + data.current.condition.icon.slice(35, 49),
                    temp: data.current.temp_c,
                    humidity: data.current.humidity,
                    wind: data.current.wind_kph
                })
                for(let i=1; i<3; i++){
                    tempArr.push({
                        date: data.forecast.forecastday[i].date,
                        condition: data.forecast.forecastday[i].day.condition.text,
                        icon: data.forecast.forecastday[i].day.condition.icon,
                        temp: data.forecast.forecastday[i].day.avgtemp_c,
                    })
                }
                setForecastWeather(tempArr)
            })
    }
    useEffect(() => {
        searchCountry(country)
    }, [])

    return (
        <div class='mainWeatherContainer container'>
            <div class={isMobile ? 'pl-1 pt-3 h5' : 'pl-3 pt-4 h3'}><strong>Weather</strong></div>
            <div class={isMobile ? 'searchBarContainer row pl-2 mx-0 mt-1' : 'searchBarContainer row pl-3 mx-0 mt-3'}>
                <SearchBar searchCountry={searchCountry} />
            </div>
            <div class='weatherContainer row mx-0'>
                <Weather country={country} currentweather={currentweather} forecastweather={forecastweather}/>
            </div>
        </div>
    )
}
export default WeatherPage;