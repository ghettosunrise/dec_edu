<?php

$data = http_build_query($data)
$to      = 'ghettosunriise@gmail.com';
$subject = 'ORDER RECEIVED';
$message = $data;


mail($to, $subject, $message);
?>


