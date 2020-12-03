function weatherSearch(name) {

    var Key = "c2716f16e2b49adc65224dba816571c2";
    var userSearch = $("#city-search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ userSearch+"&appid=" + Key;

$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
    // console.log(response);
        
        $("#city-name").empty();
        $("#uv-index").empty();
        $("#forecast").empty();


        var cityName = $("<div>").text(response.name);
        var weatherIcon = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
        iconEl = $("<img>").attr("src", iconURL);
        var tempK = response.main.temp;
        var tempC = (tempK - 273.15)*1.80+32;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;

        $("#city-name").empty();
        $("#city-name").append(cityName); 
        $(cityName).addClass("city-name-style");
        $(cityName).append(iconEl);
        $("#city-name").append("<p>" + "Temperature: " + tempC.toFixed(2) + " °F");
        $("#city-name").append("<p>" + "Humidity: " + humidity + " %");
        $("#city-name").append("<p>" + "Wind Speed: " + windSpeed + " MPH");

 })

 var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+userSearch+"&appid=" + Key;

    $.ajax({
        url: queryURLForecast,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for (let index = 0; index < 5; index++) {

            console.log(index);
        
            var rawDate = JSON.stringify(response.list[index].dt_txt);
        var splitForecastDate = rawDate.split(" ");
        var forecastDate = rawDate;

        var forecastWeatherIcon = response.list[index].weather[0].icon;
        console.log(forecastWeatherIcon);
        var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        console.log(forecastIconURL);
        forecastIconEl = $("<img>").attr("src", forecastIconURL);

        var forecastTempK = response.list[index].main.temp;
        var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        var forecastHum = response.list[1].main.humidity;

        $("#forecast").append(forecastDate);
        $("#forecast").append(forecastIconEl);
        $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");
        }
        // 1 DAY Forecast
        // var rawDate = JSON.stringify(response.list[1].dt_txt);
        // var splitForecastDate = rawDate.split(" ");
        // var forecastDate = moment(splitForecastDate[0]).format("MM/DD/YYYY");

        // var forecastWeatherIcon = response.list[1].weather[0].icon;
        // console.log(forecastWeatherIcon);
        // var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        // console.log(forecastIconURL);
        // forecastIconEl = $("<img>").attr("src", forecastIconURL);

        // var forecastTempK = response.list[1].main.temp;
        // var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        // var forecastHum = response.list[1].main.humidity;

        // $("#forecast").append(forecastDate);
        // $("#forecast").append(forecastIconEl);
        // $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        // $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");

        // // 2 DAY FORECAST
        // var rawDate = JSON.stringify(response.list[2].dt_txt);
        // var splitForecastDate = rawDate.split(" ");
        // var forecastDate = moment(splitForecastDate[1]).format("MM/DD/YYYY");

        // var forecastWeatherIcon = response.list[2].weather[0].icon;
        // var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        // forecastIconEl = $("<img>").attr("src", forecastIconURL);

        // var forecastTempK = response.list[2].main.temp;
        // var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        // var forecastHum = response.list[2].main.humidity;

        // $("#forecast").append(forecastDate);
        // $("#forecast").append(forecastIconEl);
        // $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        // $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");

        // // 3 DAY FORECAST
        // var rawDate = JSON.stringify(response.list[3].dt_txt);
        // var splitForecastDate = rawDate.split(" ");
        // var forecastDate = moment(splitForecastDate[2]).format("MM/DD/YYYY");

        // var forecastWeatherIcon = response.list[3].weather[0].icon;
        // var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        // forecastIconEl = $("<img>").attr("src", forecastIconURL);

        // var forecastTempK = response.list[3].main.temp;
        // var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        // var forecastHum = response.list[3].main.humidity;

        // $("#forecast").append(forecastDate);
        // $("#forecast").append(forecastIconEl);
        // $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        // $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");

        // // 4 DAY FORECAST
        // var rawDate = JSON.stringify(response.list[4].dt_txt);
        // var splitForecastDate = rawDate.split(" ");
        // var forecastDate = moment(splitForecastDate[3]).format("MM/DD/YYYY");

        // var forecastWeatherIcon = response.list[4].weather[0].icon;
        // var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        // forecastIconEl = $("<img>").attr("src", forecastIconURL);

        // var forecastTempK = response.list[4].main.temp;
        // var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        // var forecastHum = response.list[4].main.humidity;

        // $("#forecast").append(forecastDate);
        // $("#forecast").append(forecastIconEl);
        // $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        // $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");

        // // 5 DAY FORECAST
        // var rawDate = JSON.stringify(response.list[5].dt_txt);
        // var splitForecastDate = rawDate.split(" ");
        // var forecastDate = moment(splitForecastDate[4]).format("MM/DD/YYYY");

        // var forecastWeatherIcon = response.list[5].weather[0].icon;
        // var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        // forecastIconEl = $("<img>").attr("src", forecastIconURL);

        // var forecastTempK = response.list[5].main.temp;
        // var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        // var forecastHum = response.list[5].main.humidity;

        // $("#forecast").append(forecastDate);
        // $("#forecast").append(forecastIconEl);
        // $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        // $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");
        

    
 })

 localStorage.setItem("userAnswer", userSearch);
    var storedUserAnswer = localStorage.getItem("userAnswer");
    $("#past-search").append("<p>" + storedUserAnswer);
}

 $("#city-search-btn").on("click", function(event) { 
    event.preventDefault();
     var inputCity = $("#city-search").val().trim();

     weatherSearch(inputCity);
 });




