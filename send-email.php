<?php
// Configura tus claves API de Resend y reCAPTCHA
$apiKey = 're_ErY75cYP_DFYnCWDiYfcc9vK4DZszU8Ui'; // Reemplaza con tu clave de API de Resend
$recaptchaSecret = '6LduDOEqAAAAAFCTmt5Jl-DOsE1sNG-riY76t_nP'; // Reemplaza con tu clave secreta de reCAPTCHA
$fromEmail = 'no-reply@iquitosexpedition.com'; // Reemplaza con tu dirección de correo de envío
$toEmail = 'reservas@iquitosexpedition.com'; // Reemplaza con el correo al que enviarás los mensajes

// Obtén los datos del formulario
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$telephone = $data->telephone;
$subject = $data->subject;
$message = $data->message;
$recaptchaToken = $data->recaptchaToken;

// Verificar que todos los campos estén presentes
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(["error" => "Todos los campos son obligatorios"]);
    http_response_code(400);
    exit();
}

// Verificar el reCAPTCHA
$recaptchaVerify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaToken");
$recaptchaResult = json_decode($recaptchaVerify);

if (!$recaptchaResult->success) {
    echo json_encode(["error" => "Verificación de reCAPTCHA fallida"]);
    http_response_code(400);
    exit();
}

// Configura los datos para enviar el correo usando Resend
$dataToSend = [
    'from' => "Iquitos Expedition <$fromEmail>",
    'to' => [$toEmail],
    'cc' => [$email],
    'subject' => $subject,
    'text' => "Nombre: $name\nTeléfono: $telephone\nEmail: $email\nMensaje:\n$message",
    'html' => "<p><strong>Nombre:</strong> $name</p><p><strong>Teléfono:</strong> $telephone</p><p><strong>Email:</strong> $email</p><p><strong>Mensaje:</strong> $message</p>"
];

// Usar la API de Resend para enviar el correo
$ch = curl_init("https://api.resend.com/emails");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $apiKey",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dataToSend));

$response = curl_exec($ch);
curl_close($ch);

// Procesar la respuesta de Resend
$responseData = json_decode($response, true);

if (isset($responseData['error'])) {
    echo json_encode(["error" => "No se pudo enviar el correo"]);
    http_response_code(500);
    exit();
}

// Si el correo fue enviado correctamente
echo json_encode(["message" => "Correo enviado correctamente"]);
?>