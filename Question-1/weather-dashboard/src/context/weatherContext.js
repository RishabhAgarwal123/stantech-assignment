import { createContext, useState, useContext, useEffect } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const key = process.env.REACT_APP_API_KEY;
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async (city) => {
        try {
            setLoading(true);
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
            if (!res.ok) {
                alert(res.statusText);
            }
            const data = await res.json();
            setWeatherData(data);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
        fetchData(query);
    };

    const fetchCityByCoordinates = async (long, lat) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`);
            if (!response.ok) {
                throw new Error('Failed to fetch city name');
            }
            const data = await response.json();
            const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || data.address.state;
            if (city) {
                fetchData(city);
            }
        } catch (error) {
            console.error("Error fetching city name:", error);
        }
    }

    const getCurrentLocationCoordiantes = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                fetchCityByCoordinates(longitude, latitude);
            });
        }
    }

    useEffect(() => {
        getCurrentLocationCoordiantes();
        return () => {}
    }, []);

    return (
        <SearchContext.Provider value={{ searchQuery, updateSearchQuery, weatherData, loading }}>
            {children}
        </SearchContext.Provider>
    );
};
