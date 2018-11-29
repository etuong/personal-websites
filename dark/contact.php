<?php
if(isset($_POST['email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "etuongmelrose@gmail.com";

    function died($error) {
        // your error code can go here
        echo "I am very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if( !isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
		!isset($_POST['subject']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
	$email_subject = $_POST['subject']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($email_subject) < 2) {
    $error_message .= 'The Subject you entered do not appear to be valid.  Please write more than 1 letter!<br />';
  }
  if(strlen($comments) < 5) {
    $error_message .= 'The Comments you entered do not appear to be valid. Please write more than 5 letters!<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "First Name: ".clean_string($first_name)."\n\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n\n";
    $email_message .= "Email: ".clean_string($email_from)."\n\n";
	$email_message .= "Subject: ".clean_string($email_subject)."\n\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n\n";
    $email_message .= "Comments: ".clean_string($comments)."\n\n";
     
// create email headers
$headers = 'From: '.$first_name. $last_name."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- place your own success html below -->
 
Thank you for contacting me! I will be in touch with you very soon.  Please press the back button to go back.  :) YOLO!
 
<?php
}
die();
?>