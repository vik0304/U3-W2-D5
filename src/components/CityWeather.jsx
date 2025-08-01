import { Button, Alert } from "react-bootstrap";
import {
  ThermometerHalf,
  ThermometerSnow,
  ThermometerSun,
  SunriseFill,
  SunsetFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const CityWeather = ({ city, country, weatherObj }) => {
  const navigate = useNavigate();
  if (!weatherObj || !weatherObj.coord || !weatherObj.main || !weatherObj.sys) {
    return (
      <Alert variant="light" className="text-center">
        Choose a city/country and press the "Check Weather" button to find the
        weather infos!
      </Alert>
    );
  }

  const formatTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="text-center bg-primary-subtle py-3 rounded-4 shadow">
      <h3>
        {city}, {country}
      </h3>
      <p style={{ fontSize: "0.8rem" }} className="my-0">
        Coordinates: lat={weatherObj.coord.lat} lon={weatherObj.coord.lon}
      </p>
      <div className="d-flex justify-content-evenly align-items-center my-3">
        <div className="flex-grow-1">
          <h2>
            <ThermometerHalf />: {Math.round(weatherObj.main.temp)}°C
          </h2>
        </div>
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <div>
            <h4>
              <ThermometerSun />: {Math.round(weatherObj.main.temp_max)}°C
            </h4>
          </div>
          <div>
            <h4>
              <ThermometerSnow />: {Math.round(weatherObj.main.temp_min)}°C
            </h4>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly my-3 ">
        <p className="flex-grow-1">
          <SunriseFill className="fs-4" />: {formatTime(weatherObj.sys.sunrise)}
        </p>
        <p className="flex-grow-1">
          <SunsetFill className="fs-4" />: {formatTime(weatherObj.sys.sunset)}
        </p>
      </div>
      <Button
        variant="primary"
        onClick={() => {
          navigate("/city-details/" + city + "/" + country);
        }}
      >
        Check {city}'s weather details
      </Button>
    </div>
  );
};

export default CityWeather;
