import "./WeatherCard.css";

interface IWeatherCardProps {
    weather: {
        day: string,
        temperature: number,
        condition: string,
        emoji: string
    }
}

const WeatherCard: React.FC<IWeatherCardProps> = (props) => {
    return (  
        <article className="weather__card">
            <h1>{props.weather.day}</h1>
            <div className="weather__img">{props.weather.emoji}</div>
            <h2>{props.weather.temperature}°C</h2>
            <p>{props.weather.condition}</p>
        </article>
    );
}

export default WeatherCard;