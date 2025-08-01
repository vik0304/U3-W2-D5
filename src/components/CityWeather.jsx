import { Button } from "react-bootstrap";

const CityWeather = ({ city, country, weatherObj }) => {
  const formatTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const sunrise = formatTime(weatherObj.sys.sunrise);
  const sunset = formatTime(weatherObj.sys.sunset);

  return (
    <div className="text-center">
      <h3>
        {city}, {country}
      </h3>
      <p style={{ "font-size": "0.8rem" }}>
        Coordinates: lat={weatherObj.coord.lat} lon={weatherObj.coord.lon}
      </p>
      <div className="d-flex justify-content-evenly align-items-center">
        <div>
          <h2>Temperature: {weatherObj.main.temp}</h2>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div>
            <h4>MAX: {weatherObj.main.temp_max}</h4>
          </div>
          <div>
            <h4>MIN: {weatherObj.main.temp_min}</h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
      <Button variant="primary">Check {city}'s weather details</Button>
    </div>
  );
};

export default CityWeather;
