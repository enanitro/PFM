$('#rutaPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getruta.php?id='+ id, displayRuta);
});



function displayRuta(data) {
	var ruta = data.items;

	var item;

	$.each(ruta, function(index, r) {

		item = r;

			$('#linkList').append('<li><a href="rutalocaldetails.html?id=' + r.local_id + '">' +
					'<img src="img/logos/' + r.logo + '"/>' +
					'<h4>' + r.local + '</h4>' +
					'<p>' + r.direccion + '</p> </a></li>');

			if (item.descripcion) {
			$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>'+ r.local +'</h3>' + 
				'<p>' + item.descripcion + '</p></div>');
	}


	});

	$('#linkList').append('<li><a href="rutamap.html?id=' + item.id + '">' +
			'<img src="img/icons/maps.png"/>' +
			'<h3>Mapa</h3>');

	//if (ruta.portada) {
		//$('#rutaImg').attr('src', 'img/portadas/' + 'portada.png');
	//}	

	if (item.nombre) {
		$('#rutaNombre').append('<center><h2>' + item.nombre + '</h2></center>');		
	}

	
	$('#linkList').listview('refresh');
	$('#detailsSet').collapsibleset('refresh');

}
