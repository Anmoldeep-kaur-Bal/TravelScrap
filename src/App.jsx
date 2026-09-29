import { useState } from "react";
import SearchBar from "./SearchBar";
import DestinationCard from "./DestinationCard";
import Loading from "./Loading";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchDestination() {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setDestination(null);

    try {
      // AJAX/API request #1: convert city name into coordinates.
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Could not search for that destination.");
      }

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("Destination not found. Try another city.");
      }

      const place = locationData.results[0];

      // AJAX/API request #2: get live weather for the selected place.
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("Weather information could not be loaded.");
      }

      const weatherData = await weatherResponse.json();

      setDestination({
        name: place.name,
        country: place.country,
        admin1: place.admin1,
        latitude: place.latitude,
        longitude: place.longitude,
        timezone: place.timezone,
        temperature: weatherData.current.temperature_2m,
        apparentTemperature: weatherData.current.apparent_temperature,
        windSpeed: weatherData.current.wind_speed_10m,
        weatherCode: weatherData.current.weather_code,
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <div className="paper">
        <header className="hero">
          <p className="eyebrow">✦ A LITTLE DIGITAL PASSPORT</p>
          <h1>TravelScrap</h1>
          <p className="tagline">
            Search a place. Pull its live weather. Save the moment.
          </p>

          <SearchBar
            city={city}
            setCity={setCity}
            onSearch={searchDestination}
            loading={loading}
          />
        </header>

        {loading && <Loading />}

        {error && (
          <div className="error" role="alert">
            <strong>Oops!</strong>
            <p>{error}</p>
          </div>
        )}

        {destination && !loading && (
          <DestinationCard destination={destination} />
        )}

        {!destination && !loading && !error && (
          <div className="empty-state">
            <div className="stamp">✈</div>
            <h2>Your next scrap starts here.</h2>
            <p>
              Try searching for Paris, Tokyo, London, Amritsar, Dubai, or any
              city you want to explore.
            </p>
          </div>
        )}

        <footer>
          Built with React + fetch() + Open-Meteo API
        </footer>
      </div>
    </main>
  );
}

export default App;
