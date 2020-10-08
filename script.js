//wait until the DOM is ready to load
$(document).ready(function() {
    //empty variable that will be populated by the user input for the city they select
   var cityname; 
   
    $('#submitSearch').click(function() {
        // console.log(Working);
        cityname = "Chicago";

        var queryURL = "https://cors-anywhere.herokuapp.com/" + "api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=c2716f16e2b49adc65224dba816571c2";

        $.ajax({
            url: queryURL,
            method: "GET"
          })

          .then(function(response) {
              console.log(response);
          });
    });

});
