var api = "https://api.weather.gov"

var citySearch = document.getElementsByClassName(containerCS);
var cityName = document.getElementsByClassName(textareaCS);
var tempText = document.getElementsByClassName(textareaT);
var windText = document.getElementsByClassName(textareaW);
var humidText = document.getElementsByClassName(textareaH);
var fiveDayForcast = document.getElementsByClassName(containerWk);
var displayFiveDayA = document.getElementsByClassName(containerDA);
var displayFiveDayB = document.getElementsByClassName(containerDB);
var displayFiveDayC = document.getElementsByClassName(containerDC);
var displayFiveDayD = document.getElementsByClassName(containerDD);
var displayFiveDayE = document.getElementsByClassName(containerDE);

fetch ('http://api.weather.gov', {
  method: 'GET',
  credentials: 'same-origin',
  redirect: 'follow',
  dataA: {
    forcast_days: 0,
    units: f,
    callback: Function_Name,
    percipitation,
    hourly>temperature,
    hourly>wind_speed,
    hourly>humidity,
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (dataA) {
      console.log(dataA);
  })

function displayTodayWeather(dataA) {
  cityData.textContent = dataA[0].q;
  
}

$.ajax({
    url: 'https://api.weather.gov',
    data: {
      forecast_days: 5,
      units: f,
      callback: Function_Name,
      percipitation,
      hourly>temperature,
      hourly>wind_speed,
      hourly>humidity,
    },
    dataType: 'json',
    success: function(apiResponse) {
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}F`);
    }});
    function saveWeatherToStorage(Weathers) {
        localStorage.setItem('weathers',JSON.stringify(weathers));
    }
    var weathers = readWeathersFromStorage();
    
    function printWeatherData(weathers) {
      displayFiveDayA.textContent(0);
      displayFiveDayB.textContent(1);
      displayFiveDayC.textContent(2);
      displayFiveDayD.textContent(3);
      displayFiveDayE.textContent(4);
    } 

      for (var i = 0; i < weathers.length; i += 1)
        var weather = weathers[i] { 
          
      }

cityData.addEventListener('click',buttonClickHandler);
