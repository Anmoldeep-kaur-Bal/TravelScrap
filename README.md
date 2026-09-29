# 🌍 TravelScrap

A React-based travel exploration app that lets users search for a city and view its current weather information using public APIs.

## ✨ Features

- 🔎 Search for any city
- 🌡️ View current temperature and apparent temperature
- ☁️ Display current weather conditions
- 💨 View wind speed
- 📍 View destination coordinates
- 🕐 Display timezone
- ⏳ Loading state while fetching data
- ⚠️ Error handling for invalid cities or API problems
- 📱 Responsive and clean user interface

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- Vite
- Fetch API
- Git & GitHub

## 🔗 APIs Used

TravelScrap uses the public **Open-Meteo APIs**:

- **Geocoding API** — finds the coordinates of the searched city
- **Weather API** — retrieves current weather information

No API key is required.

## 📂 Project Structure

```text
TravelScrap/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── DestinationCard.jsx
│   ├── Loading.jsx
│   ├── SearchBar.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
