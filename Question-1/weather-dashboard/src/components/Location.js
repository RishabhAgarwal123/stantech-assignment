import React, { useEffect, useState } from 'react'
import { useSearch } from '../context/weatherContext'

const Location = () => {
    const { loading, weatherData } = useSearch();

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Function to format time as "09:03"
    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    // Function to get day of the week as "Thursday"
    const getDayOfWeek = (date) => {
        const options = { weekday: 'long' };
        return date.toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    if (loading) {
        return <div className="card-container">
            <div className="location-details">
                <p className="shimmer p"></p>
                <div className="date-time">
                    <p className="shimmer p"></p>
                    <p className="shimmer p"></p>
                </div>
            </div>
        </div>
    }

    return (
        <div className="card-container">
            <div className="location-details">
                <p>{weatherData?.name}</p>
                <div className="date-time">
                    <p>{formatTime(currentDateTime)}</p>
                    <p>{getDayOfWeek(currentDateTime)}, {formatDate(currentDateTime)}</p>
                </div>
            </div>
        </div>
    )
}

export default Location