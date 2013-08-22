<?php

$con = mysql_connect('mysql.hostinger.es', 'u540071968_test', 'e1p3k3');
//nos conectamos a nuestra base de datos
if (!$con)
{
die('Could not connect: ' . mysql_error());
//verificamos que los datos sean correctos
}
// Seleccionamos la base de datos a utilizar
mysql_select_db("u540071968_test", $con) or die ("error");
$result = mysql_query("SELECT  id, campo1 from prueba") or die ("error");
//realizamos la consulta a nuestra base de datos
$test = array(); 
//creamos una variable de tipo array
$row_cnt = mysql_num_rows($result); 
//contamos el numero de filas devueltas por la consulta
while($row = mysql_fetch_array($result)) //recorremos todos las filas de nuestra consulta para leer los resultador
{
//ahora vamos a llenar el array con la información de la base de datos, necesitamos asignar un campo dentro del array para cada uno de los campos de la tabla
$test [] = array ('campo_id'=>$row['id'], 'campo1'=> $row['campo1']); } 
//ya que tenemos lleno el array vamos a utilizarlo para generar nuestro archivo XML, usando la librería DOMDocument
//iniciamos la función DOMDocument
$doc = new DOMDocument(); 
$doc->formatOutput = true; 
//Acá creamos el primer elemento de nuestro xml llamado results, este elemento tiene un atributo llamado count, q devuelve el numero de registros que va a contener, esto lo obtenemos del numero de filas devueltas por la consulta
$r = $doc->createElement( "results" ); 
$r->setAttribute("count",$row_cnt); 
//abrimos la etiqueta results, q será la principal
$doc->appendChild( $r );
foreach( $test as $arraytest ) { 
//iniciamos a recorrer el array
//creamos la etiqueta result, q dentro contendra la información del campo1 y campo2 de la base de datos
$b = $doc->createElement( "data" );
$campo_id = $doc->createElement ( "id" );
$campo_id->appendChild( $doc->createTextNode( $arraytest['campo_id'] ) );
$b->appendChild( $campo_id );
$campo1 = $doc->createElement ( "campo1" );
$campo1->appendChild( $doc->createTextNode( $arraytest['campo1'] ) ); 
//cerramos la etiqueta data
$b->appendChild( $campo1 ); 
//cerramos la etiqueta resulsts
$r->appendChild( $b ); } 
//ponemos el nombre de nuestro archivo xml
$doc->save("test.xml"); 


// se muestra el resultado
echo json_encode(array('tests'=>$test));


//cerramos la conexión a la base de datos
mysql_close($con); ?>


