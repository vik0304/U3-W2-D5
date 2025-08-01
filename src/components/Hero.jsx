import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center bg-info my-3 shadow rounded-4 py-5">
        <h1>WeatherWise</h1>
        <h3>We're not just guessing - we're WeatherWise</h3>
      </div>
    </Container>
  );
};

export default Hero;
