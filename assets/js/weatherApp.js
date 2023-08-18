// API url
var apiUrl = "https://api.weather.gov/zones/{type}/{zoneId}/forecast/?percipitation&hourly>temperature&hourly>wind_speed&hourly>humidity"

// variables needed for api call and display 1 day weather info 
var cityContainer = document.getElementById('cityContainer');
var cityName = document.getElementById('cityName');
var cityZipCode = document.getElementById('zipCode');
var submitButton = document.getElementById('citySearch')

//button will listen and click fetchWeatherData and Display Weather Data
submitButton.addEventListener("click", function() {
  fetchWeatherData(apiUrl);
  handleWeatherFormSubmit();
  printWeatherData();
});

function fetchWeatherData(apiUrl) {
  fetch(apiUrl)
    .then(function(response) {
     if (!response.ok) {
      throw new Error("Network Response NOT ok");
     } 
     return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error("Fetch error:", error);
    });
}

function readWeatherFromStorage() {
  var weather = localStorage.getItem('weather');
  if (weather) {
    weather = JSON.parse(weather);
  } else {
    weather = [];
  }
  return weather;
  console.log(weather);
}

function saveWeatherToStorage() {
  localStorage.setItem('weather', JSON.stringify(weather));
}

function printWeatherData() {
  cityContainer.empty();

  var weather = readWeatherFromStorage();

  for(var i = 0; i < weather.length; i += 1) {
    var weathers = weather[i];

    var rowEl = $('containerSD');
    var percipitation = $('percipitation').text(weather.percipitation);
    var temperature = $('temperature').text(weather.temperature);
    var windSpeed = $('windSpeed').text(weather.windSpeed);
    var humidity = $('humidity').text(weather.humidity);
    
    rowEl.appendChild(percipitation);
    rowEl.appendChild(temperature);
    rowEl.appendChild(windSpeed);
    rowEl.appendChild(humidity);
    cityContainer.appendChild(rowEl);
  }
}

function handleWeatherFormSubmit(event) {
  event.preventDefault();

  var cityName = cityName.value.trim();
  var cityZipCode = cityZipCode.value.trim();

  var newWeather = {
    name: cityName,
    zip: cityZipCode,
  }

  var weather = readWeatherFromStorage();
  weather.push(newWeather);
  saveWeatherToStorage(weather);

  printWeatherData();
  
  cityName.value = ('');
  cityZipCode.value = ('');
}

///
//var fiveDayForcast = document..getElementById('containerWk');
//var displayFiveDayA = document..getElementById('containerDA');
//var displayFiveDayB = document..getElementById('containerDB');
//var displayFiveDayC = document..getElementById('containerDC');
//var displayFiveDayD = document..getElementById('containerDD');
//var displayFiveDayE = document..getElementById('containerDE');









//var tempText = document..getElementById('textareaT');
//var windText = document..getElementById('textareaW');
//var humidText = document..getElementById('textareaH');

//fetch({
//    url: 'https://api.weather.gov',
//    data: {
//      forecast_days: 5,
//      units: f,
//      callback: Function_Name,
//      percipitation,
//      hourly>temperature,
//      hourly>wind_speed,
//      hourly>humidity,
//    },
//    dataType: 'json',
//    success: function(apiResponse) {
//      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}F`);
//    }});
//    function saveWeatherToStorage(Weathers) {
//        localStorage.setItem('weathers',JSON.stringify(weathers));
//    }
//    var weathers = readWeathersFromStorage();
//    
//   function printWeatherData(weathers) {
//    displayFiveDayA.textContent(0);
//      displayFiveDayB.textContent(1);
//      displayFiveDayC.textContent(2);
//      displayFiveDayD.textContent(3);
//      displayFiveDayE.textContent(4);
//    } 

//      for (var i = 0; i < weathers.length; i += 1)
//        var weather = weathers[i] { 
          
//      }

//cityData.addEventListener('click',buttonClickHandler);
