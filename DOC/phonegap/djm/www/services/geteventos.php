<?php
include 'config.php';

$sql = "select e.id, e.nombre, date_format( e.inicio, '%d-%m-%Y %H:%i' ) inicio, l.nombre local, l.logo " . 
		"from evento e, local l " .
		"where e.local_id = l.id and e.inicio > now() " .
		"order by e.inicio";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$eventos = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($eventos) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>