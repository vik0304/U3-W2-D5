import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import CityWeather from "./CityWeather";

const WeatherFinder = () => {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeater = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=4d7eaf64302003a1dd1161bc3d876a32&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}`);
        }
      })
      .then((weatherObj) => {
        setWeather(weatherObj);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Container className="my-5">
      <div className="bg-info-subtle shadow rounded-4 py-5">
        <Row className="justify-content-center">
          <Col xs={6} md={5} lg={4}>
            <Form.Label htmlFor="cityInput">
              I'm looking for the weather of:
            </Form.Label>
            <Form.Control
              type="text"
              id="cityInput"
              aria-describedby="cityInput"
              placeholder="Milan/New York/Tokyo..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Enter the city you want to check the weather for (make sure to
              spell it correctly!)
            </Form.Text>
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Form.Label htmlFor="countryInput">Country code:</Form.Label>
            <Form.Control
              type="text"
              id="countryInput"
              aria-describedby="countryInput"
              placeholder="IT/US/JP..."
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Enter the country code of the selected city (make sure to spell it
              correctly!)
            </Form.Text>
          </Col>
        </Row>
        <div className="text-center my-3">
          <Button
            variant="primary"
            onClick={() => {
              fetchWeater();
            }}
          >
            Check Weather
          </Button>
        </div>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <CityWeather
              city={city}
              country={countryCode}
              weatherObj={weather}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default WeatherFinder;
