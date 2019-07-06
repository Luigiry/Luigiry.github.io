var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//Open Weather Map API call
var weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=66f6d6a1e23693c441db2a9ca11bd964';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

var forecastRequest = new XMLHttpRequest();
apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=66f6d6a1e23693c441db2a9ca11bd964';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

//Current Weather
weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    var desc = weatherData.weather[0].description;
    var highTemp = weatherData.main.temp_max;
    var windSpeed = weatherData.wind.speed;
    var windDeg = weatherData.wind.deg;
    var humidity = weatherData.main.humidity;
    
    document.getElementById('currentdesc').innerHTML = desc;
    document.getElementById('currenttemp').innerHTML = highTemp;
    document.getElementById('currenthumidity').innerHTML = humidity;
    document.getElementById('windspeed').innerHTML = windSpeed;
    //document.getElementById("windDegree").style.transform = "rotate(" + windDeg + "deg)";

    document.getElementById("windchill").innerHTML = calcWindChill(windSpeed, highTemp).toFixed(0); 
}
//Wind Chill calculation
function calcWindChill(windSpeed, avgTemp) {
    var windChill = 35.74 + 0.6215 * avgTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * avgTemp * Math.pow(windSpeed, 0.16);  
    
    return windChill;
}

//5 Day Forecast
forecastRequest.onload = function () {
    
    var forecastData = JSON.parse(forecastRequest.responseText);

    var list = forecastData['list'];
    var sDate = "";
    var splitDate;
    var fDate;
    var dayCount = 1;
    for (x in list) {
        sDate = list[x].dt_txt;
        if (sDate.indexOf("18:00:00") > 0) {
            sDate = sDate.split(" ");
            splitDate = sDate[0].split("-");
 
            fDate = new Date(splitDate[0], splitDate[1]-1, splitDate[2]-1);
            var fTemp = list[x].main.temp.toFixed(0);
            var fIcon = "http://openweathermap.org/img/w/" + list[x].weather[0].icon + ".png";
            var fAlt = list[x].weather[0].description;
            
            populateForecast(dayCount, fDate, fIcon, fAlt, fTemp);

            dayCount++;
        }
    }

}

function populateForecast(dayCount, fDate, fImgIcon, fImgAlt, fTemp) {
    document.getElementById("forecast" + dayCount + "h").innerHTML = daysOfWeek[fDate.getDay()];
    document.getElementById("imgForecast" + dayCount).setAttribute("src", fImgIcon);
    document.getElementById("imgForecast" + dayCount).setAttribute("alt", fImgAlt);
    document.getElementById("forecastTemp" + dayCount).innerHTML = fTemp;
}