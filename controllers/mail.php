<?php

/* https://api.telegram.org/bot802733552:AAHFCvpwu6z8kt0faAPoLp35GPsKhpKkEpM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$phone = $_POST['phone'];
$model = $_POST['model'];
$type = $_POST['type'];
$number = $_POST['number'];
$detail = $_POST['detail'];
$token = "802733552:AAHFCvpwu6z8kt0faAPoLp35GPsKhpKkEpM";
$chat_id = "-381951411";
$arr = array(
  'Телефон: ' => $phone,
  'Марка: ' => $type,
  'Модель: ' => $model,
  'Номер кузова и шасси: ' => $number,
  'Деталь: ' => $detail,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$succes = "false";

if ($sendToTelegram) {
  $succes = "true";
} else {
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={Error request}","r");
}
?>