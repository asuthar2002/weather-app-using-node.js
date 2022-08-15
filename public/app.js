const API_KEY = `2228954c62278501933d801861b94609`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const city = search.value;
const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(city);
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>City Not Found</h2>`;
    return;
  }

  search.value = "";
  
  weather.innerHTML = `
  Temprature at ${data.name} is ${data.main.temp}℃`;
};

form.addEventListener("submit", (e) => {
  getWeather(search.value);
  e.preventDefault();
});

//<h2> Weather       =    ${data.weather[0].main}</h2>
