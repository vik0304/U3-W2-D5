import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThermometerHalf } from "react-bootstrap-icons";

const CityDetails = () => {
  const params = useParams();
  console.log("params", params);
  const [weatherInfo, setWeatherInfo] = useState({});
  const fetchCityWeater = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${params.city},${params.country}&appid=4d7eaf64302003a1dd1161bc3d876a32&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error ${response.status}`);
        }
      })
      .then((weatherObj) => {
        console.log(weatherObj);
        setWeatherInfo(weatherObj);
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    fetchCityWeater();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDateTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${dayName}, ${day}/${month}: ${hours}:${minutes}`;
  };

  return (
    <Container className="my-5">
      <div className="bg-info-subtle shadow rounded-4 py-5 px-3">
        <h2 className="text-center mb-5">
          {params.city}'s weather for the next week
        </h2>
        {weatherInfo && weatherInfo.list ? (
          <Row xs={2} sm={3} md={4} xl={5} xxl={6} className="g-3">
            {weatherInfo.list.map((temp, index) => {
              return (
                <Col className="d-flex" key={index}>
                  <Card className="h-100 w-100">
                    <Card.Img
                      variant="top"
                      src={temp.main.temp > 19 ? "/sunny.jpg" : "/cloudy.webp"}
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title className="text-center">
                        {formatDateTime(temp.dt)}
                      </Card.Title>
                      <Card.Text className="text-center">
                        <ThermometerHalf className="fs-5" />:
                        {Math.round(temp.main.temp)}°C
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <p className="text-center mt-4">Loading weather data...</p>
        )}
      </div>
    </Container>
  );
};

export default CityDetails;
