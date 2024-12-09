import weather from "../../data/weatherData";
import WeatherCard from "../weatherCard/WeatherCard";
import "./WeatherContainer.css";

const WeatherContainer = () => {
    return (  
        <section className="weather__container">
            {weather.map((weatherDay, index) => (
                <WeatherCard key={index} weather={weatherDay} />
            ))}
        </section>
    );
}

export default WeatherContainer;