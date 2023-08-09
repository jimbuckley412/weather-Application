var citySearch = document.getElementsByClassName(containerCS);
var cityData = document.getElementsByClassName(textareaCS);
var tempText = document.getElementsByClassName(textareaT);
var windText = document.getElementsByClassName(textareaW);
var humidText = document.getElementsByClassName(textareaH);
var fiveDayForcast = document.getElementsByClassName(containerWk);
var displayFiveDayA = document.getElementsByClassName(containerDA);
var displayFiveDayB = document.getElementsByClassName(containerDB);
var displayFiveDayC = document.getElementsByClassName(containerDC);
var displayFiveDayD = document.getElementsByClassName(containerDD);
var displayFiveDayE = document.getElementsByClassName(containerDE);

$.ajax({
    url: 'https://api.weatherstack.com/forecast',
    data: {
      access_key: '65539ac03c3ef7f2e8495703442702b6',
      query: "cityData",
      forecast_days: 5,
      hourly: 1,
      units: f,
      callback: Function_Name,
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

    function printWeatherData() {
        tempText.empty();
        var weathers = readWeathersFromStorage();
        var 
    }