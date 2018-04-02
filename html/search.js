$(document).ready(function(){

   var getInfo = function(){

        var loc = $('#loc').val();
		var state = $('#state').val();

         if(loc == ''){

            $('#info').html("<h2 class='loading'>Enter something.</h2>");

         } else {

            $('#info').html("<h2 class='loading'>Getting your info!</h2>" + document.getElementById("currentCond").checked);
			
			if(document.getElementById("currentCond").checked) {
				$.getJSON("currentConditions.php?name=" + loc + "&state="+state, function(json) {
					$('#info').html('<h2 class="loading">Got it!</h2><p>' + json.current_observation.display_location.full + "<br>" + json.current_observation.temperature_string + '</p><img src='+ json.current_observation.icon_url+' alt='+json.current_observation.icon+' style="width:500px;height:600px;">');
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
           getPoster();
       }
   });

});
