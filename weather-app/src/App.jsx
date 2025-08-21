import { useEffect, useState } from "react";
import axios from "axios";
import SearchBtn from "./SearchBtn";

export default function WeatherDashboard() {
  const API_KEY = "65b4ce343301467caa8125447250608";
  const cities = ["Cairo", "London", "Sydney", "Tokyo"];

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map((city) =>
            axios.get(
              `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3&key=${API_KEY}`
            )
          )
        );

        const data = responses.map((res) => res.data);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const addCity = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=3&key=${API_KEY}`
      );
      setWeatherData((prev) => [...prev, response.data]);
    } catch (err) {
      console.error(err);
      alert("City not found!");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading weather data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Weather Dashboard</h1>
        <SearchBtn onSearch={addCity} />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6">
          {weatherData.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-bold mb-1">
                {city.location.name}, {city.location.country}
              </h2>
              <p className="text-gray-500 mb-3">{city.location.localtime}</p>
              <img
                className="w-16 h-16 mb-3"
                src={city.current.condition.icon}
                alt={city.current.condition.text}
              />
              <p className="text-3xl font-bold mb-1">{city.current.temp_c}°C</p>
              <p className="text-gray-600 mb-4">{city.current.condition.text}</p>

              {/* Current weather details */}
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
                <div>
                  <p className="font-semibold">Wind</p>
                  <p>{city.current.wind_kph} km/h</p>
                </div>
                <div>
                  <p className="font-semibold">Humidity</p>
                  <p>{city.current.humidity}%</p>
                </div>
                <div>
                  <p className="font-semibold">Visibility</p>
                  <p>{city.current.vis_km} km</p>
                </div>
              </div>

              {/* 3-day forecast */}
              <div className="mt-4 w-full">
                <h3 className="font-semibold text-gray-700 mb-2">3-Day Forecast</h3>
                <div className="grid grid-cols-3 gap-2">
                  {city.forecast.forecastday.map((day, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-2">
                      <p className="text-xs font-semibold">{day.date}</p>
                      <img
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                        className="w-8 h-8 mx-auto"
                      />
                      <p className="text-sm">{day.day.avgtemp_c}°C</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
