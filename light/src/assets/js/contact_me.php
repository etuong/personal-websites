<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = "etuong@gmail.com";

$email_subject = "Mail from:  $name";

$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .="Name: $name\n\n";
$email_body .="Email: $email_address\n\n";
$email_body .="Phone: $phone\n\n";
$email_body .="Message: $message";

$headers = "From: etuong.com\n";
$headers .= "Reply-To: $email_address";   

@mail($to, $email_subject, $email_body, $headers);
return true;         
?>