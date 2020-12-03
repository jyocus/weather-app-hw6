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

        var rawDate = JSON.stringify(response.list[1].dt_txt);
        var splitForecastDate = rawDate.split(" ");
        var forecastDate = moment(splitForecastDate[0]).format("MM/DD/YYYY");

        var forecastWeatherIcon = response.list[1].weather[0].icon;
        console.log(forecastWeatherIcon);
        var forecastIconURL = "http://openweathermap.org/img/w/" + forecastWeatherIcon + ".png";
        console.log(forecastIconURL);
        forecastIconEl = $("<img>").attr("src", forecastIconURL);

        var forecastTempK = response.list[1].main.temp;
        var forecastTempC = (forecastTempK - 273.15)*1.80+32;
        var forecastHum = response.list[1].main.humidity;

        $("#forecast").append(forecastDate);
        $("#forecast").append(forecastIconEl);
        $("#forecast").append("<p>" + "Temp: " + forecastTempC.toFixed(2) + " °F");
        $("#forecast").append("<p>" + "Humidity: " + forecastHum + "%");

        

    
 })

}

 $("#city-search-btn").on("click", function(event) { 
    event.preventDefault();
     var inputCity = $("#city-search").val().trim();

     weatherSearch(inputCity);
 });




