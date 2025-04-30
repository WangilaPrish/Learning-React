
const Weather = () => {
    let temperature = 30;

    if (temperature < 15) {
        return (
            <div>
                <h1>{temperature} degrees</h1>
                <p>It is cold outside!</p>)
            </div>
        )
    } else if (temperature >= 15 && temperature <= 25) {
        return (
            <div>
                <h1>{temperature} degrees</h1>
                 <p>It is warm outside!</p>
            </div>
        )
    } else if (temperature > 25) {
        return (
            <div>
                <h1>{temperature} degrees</h1>
                 <p>It is hot outside!</p>
            </div>
        )
    } else {
        return (<p>Weather data is not available!</p>)
    }

};

export default Weather;
