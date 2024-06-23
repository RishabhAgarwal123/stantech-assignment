import React from 'react'

const Shimmer = () => {
    return (
        <div className="card-container weather-details">
            <div className="temperature">
                <div className="current-temperature">
                    <h1 className="shimmer h1"></h1>
                    <p className="shimmer p"></p>
                </div>
                <div className="sunrise">
                    <div className="shimmer icon"></div>
                    <div>
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                </div>
                <div className="sunrise">
                    <div className="shimmer icon"></div>
                    <div>
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                </div>
            </div>
            <div className="weather-type">
                <div className="shimmer weather-icon"></div>
                <h1 className="shimmer h1"></h1>
            </div>
            <div className="air-quality">
                <div className="humidity-pressure">
                    <div className="shimmer icon"></div>
                    <div className="wind">
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                    <div className="shimmer icon"></div>
                    <div>
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                </div>
                <div className="humidity-pressure">
                    <div className="shimmer icon"></div>
                    <div>
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                    <div className="shimmer icon"></div>
                    <div>
                        <p className="shimmer p"></p>
                        <p className="shimmer p"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shimmer