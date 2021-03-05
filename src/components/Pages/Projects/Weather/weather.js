import React from 'react'
import './weather.css'

function WeatherComp(props) {
    let isMobile = window.innerWidth < 900;
    return (
        <div class='container' >
            <div class='row position-relative'>
                <div class={isMobile ? 'col-6 ' : 'col-4 ' } >
                    <p class={isMobile ? 'h4 pt-1' : 'h1 float-right pt-5'}>{props.currentweather.name}</p>
                    {isMobile ? <img src={props.currentweather.icon} width={'80px'}/> : null}
                    {isMobile ? <p style={{fontSize: '14px'}}>{props.currentweather.condition}</p> : null}
                    <strong class={isMobile ? 'forecastHeader' : 'position-absolute forecastHeader' }>Next 2 Day</strong>
                </div>
                {isMobile ? null : <div class='col-4'  style={{textAlign:'center'}}>
                    <img src={props.currentweather.icon}/>
                    <p class='h5' >{props.currentweather.condition}</p>
                </div> }
                <div class={isMobile ? 'col-6 ' : 'col-4' }>
                    <div class={isMobile ? 'infoContainer position-absolute' :'infoContainer pr-2 position-absolute' }>
                        <p class='h5'>{props.currentweather.country}</p>
                    </div>
                    <br />
                    <div class={isMobile ? 'infoContainer position-absolute' :'infoContainer pr-2 position-absolute' }>
                        <p class='pt-2'>{props.currentweather.localTime}</p>
                    </div>
                    <br />
                    <div class='infos pt-4'>
                        <p ><strong>Tempature:</strong> {props.currentweather.temp} &#8451;</p>
                        <p ><strong>Humidity:</strong> {props.currentweather.humidity} %</p>
                        <p ><strong>Wind:</strong> {props.currentweather.wind} km/h</p>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-5'>
                    <div class='row'>
                        <div class='col-4'>
                            {isMobile ? <img src={props.forecastweather[0].icon} width={'50px'}/> : <img src={props.forecastweather[0].icon} />}
                        </div>
                        <div class={isMobile ? 'col-8 pl-4' : 'col-8 pt-2'}>
                            {props.forecastweather[0].temp} &#8451;<br/>
                            {props.forecastweather[0].condition}
                        </div>
                    </div>
                </div>
                <div class='col-5'>
                    <div class='row'>
                        <div class='col-4'>
                            {isMobile ? <img src={props.forecastweather[1].icon} width={'50px'}/> : <img src={props.forecastweather[1].icon} />}
                        </div>
                        <div class={isMobile ? 'col-8 pl-4' : 'col-8 pt-2'}>
                            {props.forecastweather[1].temp} &#8451;<br/>
                            {props.forecastweather[1].condition}
                        </div>
                    </div>
                </div>
                <div class={isMobile ? 'col-2 px-0' : 'col-2'}>
                    <a class='creditsApi pt-3 position-absolute' href="https://www.weatherapi.com/" title="Free Weather API">
                        <img width={isMobile ? '40px': '80px'} src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default WeatherComp;