import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import Blank from '../Blank/Blank';

const Home = () => {
    const [weather, setWeather] = useState({});
    const [search, setSearch] = useState("");
    const date = new Date();
    let year = date.getFullYear();

    const apiKEY = 'ac067c6aa6492113ed6892def831e9d9';
    //9c56d100e6e20b17b2b0d379bd6cc076
    //8e71f5ada48a3b19550d006e18ff6a73
    //ac067c6aa6492113ed6892def831e9d9

    const searchData=(e)=>{
        setSearch(e.target.value);
    }
    var city = search;

    const searchSubmit=(e)=>{
        e.preventDefault();
        if (city === "") {
            alert("Please Add Any City")
        }else{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}`).then(response=>{
                setWeather(response.data);
            })
        }
    }
    

    return (
            <Container>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <InputGroup className="my-3 col-md-6">
                            <FormControl placeholder="Search Town Like: London" onChange={searchData}/>
                            <Button className='searchBtn' onClick={searchSubmit}>Search</Button>
                        </InputGroup>
                        {(typeof weather.main != "undefined") ? (
                            <div className="wCard">
                                <p className='city'><MdLocationOn/>{weather.name}, {weather.sys.country}</p>
                                <div className="image">
                                    <img src={"https://openweathermap.org/img/wn/"+(weather.weather[0].icon)+'@2x.png'} alt="icon" />
                                </div>
                                <div className="wBody">
                                    <p className='leftInfo'>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                    <p className='rightInfo'>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
                                    <ul className='weather_list'>
                                        <li className='feel'><WiThermometer/> Actual Feels: {parseFloat(weather.main.temp - 273).toFixed(0)} °C</li>
                                        <li className='temp'> <WiThermometer/> {parseFloat(weather.main.temp - 273).toFixed(0)} °C</li>
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
                        <div className='copyright'>
                            Copyright©<a href='https://github.com/bmhhmartin'>bmhhmartin</a>{year}.All Right Reserved
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
    );
}

export default Home;
