import React from 'react'
import { WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { useSearch } from '../context/weatherContext';
import { formatConvert, timeConverter } from '../utils/convert';
import Shimmer from './Shimmer';
import { IoCloudyNightOutline } from "react-icons/io5"
import {
    RiSunFill,
    RiMoonFill,
    RiCloudyFill,
    RiCloudy2Fill,
    RiShowersFill,
    RiRainyFill,
    RiThunderstormsFill,
    RiSnowyFill,
    RiMistFill,
    RiEyeLine
} from 'react-icons/ri';

const Weather = () => {
    const { weatherData, loading } = useSearch('');

    const getWeatherIcon = (iconCode) => {
        switch (iconCode) {
            case "01d":
                return <RiSunFill className="weather-icon" />;
            case "01n":
                return <RiMoonFill className="weather-icon" />
            case "02d":
                return <RiCloudyFill className="weather-icon" />;
            case "02n": 
                return <IoCloudyNightOutline className="weather-icon" />;
            case "03d" || "03n":
                return <RiCloudy2Fill className="weather-icon" />;
            case "04d" || "04n":
                return <RiCloudyFill className="weather-icon" />;
            case "09d" || "09n":
                return <RiShowersFill className="weather-icon" />;
            case "10d" || "10n":
                return <RiRainyFill className="weather-icon" />;
            case "11d" || "11n":
                return <RiThunderstormsFill className="weather-icon" />;
            case "13d" || "13n":
                return <RiSnowyFill className="weather-icon" />;
            case "50d" || "50n":
                return <RiMistFill className="weather-icon" />;
            default:
                return null;
        }
    };

    if (loading) {
        return <Shimmer />
    }

    return (
        <div className="card-container weather-details">
            <div className="temperature">
                <div className="current-temperature">
                    <h1>{formatConvert(weatherData?.main?.temp)}°C</h1>
                    <p>Feels Like: {formatConvert(weatherData?.main?.feels_like)}°C</p>
                </div>
                <div className="sunrise">
                    <WiSunrise className="icon" />
                    <div>
                        <p>Sunrise</p>
                        <p>{timeConverter(weatherData?.sys?.sunrise)}</p>
                    </div>
                </div>
                <div className="sunrise">
                    <WiSunset className="icon" />
                    <div>
                        <p>Sunset</p>
                        <p>{timeConverter(weatherData?.sys?.sunset)}</p>
                    </div>
                </div>
            </div>
            <div className="weather-type">
                {getWeatherIcon(weatherData?.weather?.[0]?.icon )}
                <h1>{weatherData?.weather?.[0]?.main}</h1>
            </div>
            <div className="air-quality">
                <div className="humidity-pressure">
                    <WiHumidity className="icon" />
                    <div className="wind">
                        <p>Humidity</p>
                        <p>{weatherData?.main?.humidity}%</p>
                    </div>
                    <SlSpeedometer className="icon" />
                    <div>
                        <p>Sunrise</p>
                        <p>{weatherData?.main?.pressure} hPa</p>
                    </div>
                </div>
                <div className="humidity-pressure">
                    <LuWind className="icon" />
                    <div>
                        <p>Wind Speed</p>
                        <p>{weatherData?.wind?.speed} m/s</p>
                    </div>
                    <RiEyeLine className="icon" />
                    <div>
                        <p>Visibility</p>
                        <p>{weatherData?.visibility}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather