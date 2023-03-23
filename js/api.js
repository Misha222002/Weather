export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a992d37b81dfb4502cc4d0a3a7b80577&lang=ru&units=metric`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
