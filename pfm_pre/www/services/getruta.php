<?php
include 'config.php';

$sql = "select r.id, r.nombre, date_format( r.fecha, '%d-%m-%Y' ) fecha, " .
		"l.nombre local, l.direccion, l.logo, " . 
		"rl.posicion, rl.descripcion, rl.local_id " . 
		"from ruta r, local l , ruta_local rl " .
		"where r.id=:id and l.id = rl.local_id and r.id = rl.ruta_id " .
		"group by rl.posicion";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET[id]);
	$stmt->execute();
	$ruta = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($ruta) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>