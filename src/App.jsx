import "./App.css";
import MyFooter from "./components/footer";
import Hero from "./components/Hero";
import MyNavbar from "./components/MyNavbar";
import WeatherFinder from "./components/WeatherFinder";
import CityDetails from "./components/CityDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="flex-grow-1">
                  <WeatherFinder />
                </div>
              </>
            }
          />
          <Route
            path="/city-details/:city/:country"
            element={
              <div className="flex-grow-1">
                <CityDetails />
              </div>
            }
          ></Route>
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
