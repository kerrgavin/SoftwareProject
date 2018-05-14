<?php
ini_set('display_errors', 1);

//This block takes checks to see if the 'q' is used
//and then parses the appropriate api call using the
//'id' information and the api key
if (isset($_GET['name'])) {
	if(($sname = $_GET['name'])) {
		$n = str_replace(" ","%20",$sname);
		$url = "http://autocomplete.wunderground.com/aq?query=$n";
		//echo $url;
        $response = file_get_contents($url);
	//echo $response;
        $d = json_decode($response);
        echo json_encode($d);
	}
}

?>
