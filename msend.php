
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
$empfaenger = "sebastianr.p2000@hotmail.com";


$date = $_POST['date'];
$time = $_POST['time'];
$dish = $_POST['dish'];

$betreff = "Valentine's Day Reservation"  ;


mail($empfaenger, $betreff, $date."\r\n" .$time."\r\n".$dish);

//header("HTTP/1.1 301 Moved Permanently");

header("location:index.html?mail=send");

//exit;



?>