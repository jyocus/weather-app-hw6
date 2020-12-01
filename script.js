function weatherSearch(name) {

    var Key = "c2716f16e2b49adc65224dba816571c2";
    var userSearch = $("#city-search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ userSearch+"&appid=" + Key;

$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
    console.log(response);
        

 })



 }

 $("#city-name").on("click", function(event) { 
    event.preventDefault();
     var inputCity = $("#city-search").val().trim();

     weatherSearch(inputCity);
 });




