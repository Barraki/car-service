<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['phone'];
$model = $_POST['model'];
$type = $_POST['type'];
$number = $_POST['number'];
$detail = $_POST['detail'];

$arr = array(
  'Телефон: ' => $phone,
  'Марка: ' => $type,
  'Модель: ' => $model,
  'Номер кузова и шасси: ' => $number,
  'Деталь: ' => $detail,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value." <br> ";
};

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'barraki2012@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dantedemon586'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('barraki2012@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('yalta-invest@bk.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' . $txt . '';
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}
?>