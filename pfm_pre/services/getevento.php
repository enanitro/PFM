<?php
include 'config.php';

$sql = "select e.id, e.nombre, e.cartel, e.descripcion, e.entrada, e.inicio, e.musica, " .
		"e.local_id, l.nombre local, l.logo, l.portada, l.latitud, l.longitud " . 
		"from evento e, local l " .
		"where e.id=:id and e.local_id = l.id";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$evento = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($evento) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>