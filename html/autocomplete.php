<?php
ini_set('display_errors', 1);



if (isset($_GET['name']) AND isset($_GET['country'])) {
        if(($sname = $_GET['name']) && ($scountry = $_GET['country'])) {
                $url = "http://autocomplete.wunderground.com/aq?query=$sname&c=$scountry";
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
else if (isset($_GET['name'])) {
	if(($sname = $_GET['name'])) {
		$url = "http://autocomplete.wunderground.com/aq?query=$sname";
		//echo $url;
		echo "";
        $response = file_get_contents($url);
	//echo $response;
        $d = json_decode($response);
        echo json_encode($d);
	}
}

?>
