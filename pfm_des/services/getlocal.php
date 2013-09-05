<?php
include 'config.php';

$sql = "select l.id, l.portada, l.nombre, l.direccion, l.latitud, l.longitud, l.descripcion, l.horario, l.ofertas, l.musica, l.web, l.facebook, l.twitter " .
		"from local l " .
		"where l.id=:id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$local = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($local) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>