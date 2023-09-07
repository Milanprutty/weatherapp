import axios from "axios";

const WeatherApi = async (currentText) => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${currentText}&units=metric&appid=66d6009336828b53d029b4f237899806`
  );

  return data;
};

export default WeatherApi;
