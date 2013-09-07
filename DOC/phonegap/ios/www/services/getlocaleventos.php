<?php
include 'config.php';

$sql = "select e.id, e.nombre, date_format( e.inicio, '%d-%m-%Y %H:%i' ) inicio, e.local_id " . 
		"from evento e " .
		"where e.local_id=:id"; // and e.inicio > now()";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);   
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$eventos = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($eventos) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>