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
					$('#info').html('<section id="i"><h2 class="loading">' + json.current_observation.display_location.full + '</h2><p><img id="icon" src='+ json.current_observation.icon_url+' alt='+json.current_observation.icon+' >' + json.current_observation.temperature_string + '</p></section>');
				});
			} else if(document.getElementById("almanac").checked) {
				$.getJSON("almanac.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<h2 class="loading">Got it!</h2><p>' + JSON.stringify(json, undefined,2) + '</p>');
				});
			} else if(document.getElementById("3Day").checked) {
				$.getJSON("threeDayForecast.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<h2 class="loading">Got it!</h2><p>' + JSON.stringify(json, undefined,2) + '</p>');
				});
			} else if(document.getElementById("astronomy").checked) {
				$.getJSON("astronomy.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<h2 class="loading">Got it!</h2><p>' + JSON.stringify(json, undefined,2) + '</p>');
				});
			} else if(document.getElementById("geo").checked) {
				$.getJSON("geoLookUp.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<h2 class="loading">Got it!</h2><p>' + JSON.stringify(json, undefined,2) + '</p>');
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
