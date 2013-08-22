<?php
include 'config.php';

$sql = "select l.id, l.portada, l.nombre, l.ubicacion, l.latitud, l.longitud, l.descripcion " .
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