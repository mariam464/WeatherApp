# 🌤 Weather Dashboard

A modern **Weather Dashboard** built with **React (Vite)**, **Tailwind CSS**, and the **WeatherAPI**.  
It displays **current weather** and a **3-day forecast** for multiple cities with the ability to **search and add new cities dynamically**.

---

## Features
- Built with **React + Vite** for fast development.
- **Tailwind CSS** for styling (responsive design).
- Displays **current weather details**:
  - Temperature
  - Weather condition
  - Wind speed
  - Humidity
  - Visibility
- Shows a **3-day weather forecast** for each city.
- **Dynamic city search** – Add new cities and view their weather instantly.
- **Responsive UI** – Works on mobile, tablet, and desktop.

---

## Tech used
- **React** (Vite)
- **Tailwind CSS** (v3)
- **Axios** for API requests
- **WeatherAPI** for weather data

---

##  Prerequisites
- Node.js (v14+ recommended)
- A [WeatherAPI](https://www.weatherapi.com/) API key

---

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### Install dependencies
```bash
npm install
```

### Configure API Key
Create a `.env` file in the project root and add:
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Then, in your code, access it with:
```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

### Start the development server
```bash
npm run dev
```

---

## UI Preview
The dashboard includes:
- A **search bar** for adding cities
- **Weather cards** showing:
  - Current weather info
  - **3-day forecast** with icons and temperatures

---


## API Reference
- **Base URL:** `https://api.weatherapi.com/v1/`
- **Endpoints Used:**
  - `forecast.json` → `?q={city}&days=3&key={API_KEY}`

---

## Example Weather Card
- **Current Weather**
  - City, Country
  - Temperature, Condition
  - Wind Speed, Humidity, Visibility
- **3-Day Forecast**
  - Date
  - Weather Icon
  - Average Temperature

---

## Future Enhancements
- Autocomplete for city search
- Dark mode support
- Detect user’s location and show local weather
- Hourly forecast

---

## 📜 License
This project is licensed under the **MIT License**.

---


