<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

global $email;

mail ("redclow@gmail.com","$assunto",
"Nome: $nome
Email: $email
Assunto: $assunto
Mensagem: $mensagem",
"From: $email"
);

echo "<p align=center>$nome!sua mensagem foi enviada com sucesso</p>";
echo "<p align=center>Em breve entraremos em contato</p>";
?>
</body>
</html>