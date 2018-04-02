<?php
ini_set('display_errors', 1);
//This is the api that will be appended to each api call
$key = "0ac243c7da2d3d07";



if (isset($_GET['name']) AND isset($_GET['state']) AND isset($_GET['country'])) {
        if(($sname = $_GET['name']) && ($sstate = $_GET['state']) && ($scountry = $_GET['country'])) {
                $url = "http://api.wunderground.com/api/$key/conditions/q/$scountry/$sstate/$sname.json";
                //echo $url;
                echo "";
        $response = file_get_contents($url);
        //echo $response;
        $d = json_decode($response);
        echo json_encode($d);
        }
}

//This block takes checks to see if the 'q' is used
//and then parses the appropriate api call using the
//'id' information and the api key
if (isset($_GET['name']) AND isset($_GET['state'])) {
	if(($sname = $_GET['name']) && ($sstate = $_GET['state'])) {
		$url = "http://api.wunderground.com/api/$key/conditions/q/$sstate/$sname.json";
		//echo $url;
		echo "";
        $response = file_get_contents($url);
	//echo $response;
        $d = json_decode($response);
        echo json_encode($d);
	}
}

?>
