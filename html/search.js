$(document).ready(function(){

   var getInfo = function(){

        var loc = $('#loc').val();
		var state = $('#state').val();

         if(loc == ''){

            $('#info').html("<h2 class='loading'>Enter something.</h2>");

         } else {

            $('#info').html("<img src='giphy.webp'>");

			if(document.getElementById("currentCond").checked) {
				$.getJSON("currentConditions.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<section id="i"><h2 class="loading">' + json.current_observation.display_location.full + '</h2><p><img id="icon" src='+ json.current_observation.icon_url+' alt='+json.current_observation.icon+' >' + json.current_observation.weather + '<br>Temperature: ' + json.current_observation.temperature_string +'<br>Relative Humidity: ' + json.current_observation.relative_humidity + '<br>Wind Speed: ' + json.current_observation.wind_mph + '<br>Feels Like: ' + json.current_observation.feelslike_string + '</p></section>');
				});
			} else if(document.getElementById("almanac").checked) {
				$.getJSON("almanac.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<section id="i"><h2 class="loading">Almanac</h2><p><h3>High</h3>Normal: ' + json.almanac.temp_high.normal.F + ' F (' + json.almanac.temp_high.normal.C + ' C)<br>Record: ' +  json.almanac.temp_high.record.F +' F (' +  json.almanac.temp_high.record.C + ' C) ' + json.almanac.temp_high.recordyear + '<br><h3>Low</h3>Normal: ' + json.almanac.temp_low.normal.F + ' F (' +  json.almanac.temp_low.normal.C + ' C) <br>Record: ' + json.almanac.temp_low.record.F + ' F (' +  json.almanac.temp_low.record.C + ' C) ' + json.almanac.temp_low.recordyear + '</p></section>');
				});
			} else if(document.getElementById("3Day").checked) {
				$.getJSON("threeDayForecast.php?name=" + loc + "&state="+state, function(json) {
          var f = json.forecast.simpleforecast.forecastday;
          var s = '<section id="i">';
          for (var i = 0; i < f.length; i++) {
            s+='<p>Date: ' + f[i].date.pretty + '<br>High: ' + f[i].high.fahrenheit + ' F (' + f[i].high.celsius + ' C)<br>Low: ' + f[i].low.fahrenheit + ' F (' + f[i].low.celsius + ' C)<br>Condition: ' + f[i].conditions + '<img id="icon" src='+ f[i].icon_url+' alt='+f[i].icon+' ><br>Max Wind Speed:' + f[i].maxwind.mph + ' mph (' + f[i].maxwind.kph + ' kph) ' + f[i].maxwind.dir + ' ' + f[i].maxwind.degrees + '<br>Average Wind Speed:' + f[i].avewind.mph + ' mph (' + f[i].avewind.kph + ' kph) ' + f[i].avewind.dir + ' ' + f[i].avewind.degrees + '<br>Humidity: ' + f[i].avehumidity + '(avg) ' + f[i].maxhumidity + '(max) ' + f[i].minhumidity + '(min)<br>Rainfall: ' + f[i].qpf_allday.in + 'in (' + f[i].qpf_allday.mm + 'mm)<br>Snowfall: ' + f[i].snow_allday.in + 'in (' + f[i].snow_allday.cm + 'cm)</p>';
            s+='<br>';
          }
          s += '</secion>';
					$('#info').html(s);
				});
			} else if(document.getElementById("astronomy").checked) {
				$.getJSON("astronomy.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<section id="i"><h2 class="loading">Astronomy</h2><p>Moon Illumination: ' + json.moon_phase.percentIlluminated + '<br>Phase Time: ' +  json.moon_phase.current_time.hour + ":" + json.moon_phase.current_time.minute +'<br>Sunrise: ' + json.moon_phase.sunrise.hour + ":" + json.moon_phase.sunrise.minute +'<br>Sunset: ' + json.moon_phase.sunset.hour +  ":" + json.moon_phase.sunset.minute + '</p></section>');
				});
			} else if(document.getElementById("geo").checked) {
				$.getJSON("geoLookUp.php?name=" + loc + "&state="+state, function(json) {

          var f = json.location.nearby_weather_stations.airport;
          var s = '<section id="i"><h2 class="loading">Geolookup</h2>';
          s += '<h3>Airports</h3>';
          for (var i = 0; i < f.station.length; i++) {
            s+='<p>Airport Code: ' + f.station[i].icao + '<br>Location: ' + f.station[i].city + ', ' + f.station[i].state +', ' + f.station[i].country +'</p>';
          }
          f = json.location.nearby_weather_stations.pws;
          s += '<h3>Weather Stations</h3>';
          for (var i = 0; i < f.station.length; i++) {
            s+='<p>Station Code: ' + f.station[i].id + '<br>Location: ' + f.station[i].city + ', ' + f.station[i].state +', ' + f.station[i].country +'</p>';
          }
          s += '</secion>';

					$('#info').html(s);
				});
			}

          }

        return false;
   }

   $('#sub').click(getInfo);
   $('#loc').keyup(function(event){
       if(event.keyCode == 13){
           getInfo();
       }
   });

});
