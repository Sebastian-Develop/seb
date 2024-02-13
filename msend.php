
<?php

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['sebastianr.p2000@hotmail.com'];
    $subject = $_POST['time'];
    $message = $_POST['dish'];

    $mail = new PHPMailer(true); // Set true for exceptions

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'localhost';
        $mail->SMTPAuth = false;
        $mail->SMTPAutoTLS = false;
        $mail->Port = 25;

        //Recipients
        $mail->setFrom('sebastianr.p2000@hotmail.com', 'Your Name');
        $mail->addAddress($to);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
      

        $mail->send();
        echo 'Email has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>

//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
//
//require 'PHPMailer/src/Exception.php';
//require 'PHPMailer/src/PHPMailer.php';
//require 'PHPMailer/src/SMTP.php';
//$empfaenger = "sebastianr.p2000@hotmail.com";
//
//
//$date = $_POST['date'];
//$time = $_POST['time'];
//$dish = $_POST['dish'];
//
//$betreff = "Valentine's Day Reservation"  ;
//
//
//mail($empfaenger, $betreff, $date."\r\n" .$time."\r\n".$dish);
//
////header("HTTP/1.1 301 Moved Permanently");
//
//header("location:index.html?mail=send");

//exit;



?>