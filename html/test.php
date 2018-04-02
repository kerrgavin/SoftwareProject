<?php

if(isset($_GET['id'])) {
	if($sid = $_GET['id']) {
		echo 'document.write("<p>\'http://api.openweathermap.org/data/2.5/weather?id='. $sid. '&appid=7192d8185e89ea968e871d467329b0d8\'</p>");';
	}
}

?>
