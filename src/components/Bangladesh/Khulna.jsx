import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import { WiThermometer, WiHumidity } from "react-icons/wi";
import { BsClock } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Blank from "../Blank/Blank";

const Khulna = () => {
    const [weather, setWeather] = useState({});
    const apiKEY = 'ac067c6aa6492113ed6892def831e9d9';
    //9c56d100e6e20b17b2b0d379bd6cc076
    //8e71f5ada48a3b19550d006e18ff6a73
    //ac067c6aa6492113ed6892def831e9d9

    useEffect(() => {
       axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Khulna&appid=${apiKEY}`).then(response=>{
           setWeather(response.data);
       })
    }, [weather]);

    

    return (
            <Col lg={4}>
                {(typeof weather.main != "undefined") ? (
                        <div className="wCard">
                            <p className='city'><MdLocationOn/>{weather.name}, {weather.sys.country}</p>
                            <div className="image">
                                <img src={"http://openweathermap.org/img/wn/"+(weather.weather[0].icon)+'@2x.png'} alt="icon" />
                            </div>
                            <div className="wBody">
                                <p className='leftInfo'>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                <p className='rightInfo'>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
                                <ul className='weather_list'>
                                    <li className='time'> {parseFloat(weather.main.temp - 273).toFixed(0)} °C</li>
                                    <li className='temp'> <WiThermometer/> {parseFloat(weather.main.feels_like - 273).toFixed(0)} °C</li>
                                    <li className='sky'>{weather.weather[0].description}</li>
                                </ul>
                                <div className="listMiddle">
                                    <p className="wind">Wind: {Math.floor((weather.wind.speed * 18) / 5)} km/hr</p>
                                    <p className="windFlow">Flow: {weather.wind.deg}<sup>o</sup> deg</p>
                                </div>
                                <div className="lastPart">
                                    <p><WiHumidity/> Humidity: {weather.main.humidity}%</p>
                                </div>
                            </div>
                        </div>
                ): (<Blank></Blank>)}
            </Col>
    );
}

export default Khulna;
