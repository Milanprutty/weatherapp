import axios from "axios";

const WeatherApi = async (currentText) => {
  const data = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${currentText}&appid=66d6009336828b53d029b4f237899806`
  );

  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data.data[0].lat}&lon=${data.data[0].lon}&units=metric&appid=66d6009336828b53d029b4f237899806`
  );

  return weatherData;
};

export default WeatherApi;
