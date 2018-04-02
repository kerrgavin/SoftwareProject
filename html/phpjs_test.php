<?php
$ids = array(1=>'php-mysql', 2=>'javascript', 3=>'html');

// gets the id from URL
if (isset($_GET['id'])) {
  if ($sir = $ids[$_GET['id']]) {
    // return a string with a JS instruction that will display a link
    echo 'document.write("<a href=\'http://coursesweb.net/'. $sir. '\'>'. $sir. ' course</a>");';
  }
}
?>