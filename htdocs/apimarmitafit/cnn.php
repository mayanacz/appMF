<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS *');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With *');
header('Access-Control-Type: application/json; charset-utf-8 *');

date_default_timezone_set('America/Natal');
@session_status();

$servidor = 'localhost';
$usuario = 'usermarmitafit';
$senha = '123';
$banco = 'marmitafit';

try {
    $pdo = new PDO("mysql:dbname-$banco;host-$servidor", "$usuario", "$senha");

} catch (Exception $e) {
    echo 'Erro ao conectar com banco!'. $e;

}
?>

