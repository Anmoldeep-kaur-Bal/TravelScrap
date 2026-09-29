function DestinationCard({ destination }) {
  const weatherText = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
  };

  return (
    <section className="destination-card">
      <div className="card-top">
        <div>
          <p className="eyebrow">✦ YOUR TRAVEL SCRAP</p>
          <h2>{destination.name}</h2>
          <p className="location">
            {destination.admin1 ? `${destination.admin1}, ` : ""}
            {destination.country}
          </p>
        </div>

        <div className="flag-placeholder">✈️</div>
      </div>

      <div className="weather">
        <div className="temperature">
          {Math.round(destination.temperature)}°C
        </div>

        <div>
          <strong>
            {weatherText[destination.weatherCode] || "Current conditions"}
          </strong>
          <p>
            Feels like {Math.round(destination.apparentTemperature)}°C
          </p>
        </div>
      </div>

      <div className="details">
        <div>
          <span>🌬️ Wind</span>
          <strong>{Math.round(destination.windSpeed)} km/h</strong>
        </div>

        <div>
          <span>🌍 Coordinates</span>
          <strong>
            {destination.latitude.toFixed(2)},{" "}
            {destination.longitude.toFixed(2)}
          </strong>
        </div>

        <div>
          <span>🕐 Timezone</span>
          <strong>{destination.timezone}</strong>
        </div>
      </div>

      <p className="api-note">
        Live data fetched from Open-Meteo APIs.
      </p>
    </section>
  );
}

export default DestinationCard;