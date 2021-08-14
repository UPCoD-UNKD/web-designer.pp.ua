<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// EDIT THE 2 LINES BELOW AS REQUIRED
$to .= 'youremail@domain.name';  
$subject .= 'Contact Form Email';

$email_message .= "Name: " . $name . "\n";
$email_message .= "Email: " . $email . "\n"; 
$email_message .= "Message: " . $message ."\n";

// create email headers 
$headers = 'From: '.$email."\r\n". 
'Reply-To: '.$email."\r\n" . 
'X-Mailer: PHP/' . phpversion();
 
@mail($to, $subject, $email_message, $headers);  


?>