<?php
//var_dump($_POST);
$EmailFrom = "$Email";
$EmailTo = "chad@chadschaub.com";
$Subject = "Thirdtwo Inquiry";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=#success\">";
  echo '<script>demo();</script>';
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=#error\">";
    echo '<script>demo();</script>';
}
?>