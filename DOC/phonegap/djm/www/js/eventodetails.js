$('#eventoPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getevento.php?id='+ id, displayEvento);
});



function displayEvento(data) {
	var evento = data.item;
	console.log(evento);

	if (evento.local_id) {
		$('#localHref').attr('href', 'eventolocaldetails.html?id=' + evento.local_id);		
	}

	if (evento.portada) {
		$('#eventoImg').attr('src', portadasURL + evento.portada);
	}	
	
	if (evento.nombre) {
		$('#detailsSet').append('<center><h2>' + evento.nombre + '</h2></center>');		
	}

	if (evento.descripcion) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Descripcion</h3>' + 
				'<p>' + evento.descripcion + '</p></div>');
	}
	
	if (evento.entrada) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Entrada</h3>' + 
				'<p>' + evento.entrada + '</p></div>');
	}

	if (evento.inicio) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Fecha</h3>' + 
				'<p>' + evento.inicio + '</p></div>');
	}

	if (evento.musica) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Musica</h3>' + 
				'<p>' + evento.musica + '</p></div>');
	}

	if (evento.cartel) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Cartel</h3>' + 
				'<center><img src="' + cartelesURL + evento.cartel +' " style="max-height: 100%; max-width: 100%" /></center></div>');
	}


	if ((evento.latitud) && (evento.longitud)) {
		$('#linkList').append('<li><a href="eventomap.html?lat=' + evento.latitud + '&lng=' + evento.longitud + '&n=' + evento.local + '">' +
			'<img src="' + iconsURL + 'maps.png"/>' +
			'<h3>Mapa</h3>');
	}

	if ((evento.local_id) && (evento.nombre)) {
		$('#linkList').append('<li><a href="eventolocaldetails.html?id=' + evento.local_id + '">' +
			'<img src="' + logosURL + evento.logo +'"/>' +
			'<h3>' + evento.local + '</h3>');
	}

	$('#linkList').listview('refresh');
	$('#detailsSet').collapsibleset('refresh');

}

