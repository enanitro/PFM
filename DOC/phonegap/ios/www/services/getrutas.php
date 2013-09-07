<?php
include 'config.php';

$sql = "select r.id, r.nombre, date_format( r.fecha, '%d-%m-%Y' ) fecha, r.portada " . 
		"from ruta r " .
		"where r.fecha > now() " .
		"order by r.fecha";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$rutas = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($rutas) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>