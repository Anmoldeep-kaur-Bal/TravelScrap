# TravelScrap ✈️

A small ReactJS project created for a ReactJS + AJAX/API assignment.

## What it demonstrates

- React components
- JSX
- Props
- State with `useState`
- Event handling
- `fetch()` / AJAX API requests
- Dynamic API data
- Loading state
- Error handling
- Responsive UI

## API used

TravelScrap uses the Open-Meteo Geocoding API to find a city and the Open-Meteo Weather Forecast API to retrieve current weather data.

The APIs use HTTP GET requests and return JSON. Open-Meteo provides its non-commercial API without an API key.

## How to run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Project structure

```text
src/
├── App.jsx
├── App.css
├── DestinationCard.jsx
├── Loading.jsx
├── SearchBar.jsx
├── index.css
└── main.jsx
```

## How the API flow works

1. The user searches for a city.
2. React calls the Open-Meteo Geocoding API using `fetch()`.
3. The city name is converted into latitude and longitude.
4. React calls the Open-Meteo Weather API using those coordinates.
5. The returned JSON is stored in React state.
6. `DestinationCard` receives the data through props and displays it.
7. Loading and error states are shown when appropriate.

## Created for

ReactJS / AJAX assignment.
