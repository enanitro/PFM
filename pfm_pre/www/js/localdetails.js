
$('#localPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getlocal.php?id='+ id, displayLocal);
	$.getJSON(serviceURL + 'getlocaleventos.php?id='+ id, displayEventos);
});



function displayLocal(data) {
	var local = data.item;

	$('#localImg').attr('src', 'img/portadas/' + local.portada);


	if (local.descripcion) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Descripcion</h3>' + 
				'<p>' + local.descripcion + '</p></div>');		
	}

	if (local.direccion) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Localizacion</h3>' + 
				'<p>' + local.direccion + '</p></div>');
	}
	
	if (local.horario) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Horario</h3>' + 
				'<p>' + local.horario + '</p></div>');
	}

	if (local.ofertas) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Ofertas</h3>' + 
				'<p>' + local.ofertas + '</p></div>');
	}

	if (local.musica) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Musica</h3>' + 
				'<p>' + local.musica + '</p></div>');
	}

	
	if (local.direccion) {
		//$('#linkList').append('<li><a href="https://maps.google.es/?q=' + local.latitud + ' ' + local.longitud + '" target="_new">' +
		$('#linkList').append('<li><a href="localmap.html?lat=' + local.latitud + '&lng=' + local.longitud + '&n=' + local.nombre + '">' +
			'<img src="img/icons/maps.png"/>' +
			'<h3>Mapa</h3>');
	}

	if (local.web) {
		$('#linkList').append('<li><a href="' + local.web + '" target="_new">' +
			'<img src="img/icons/web3.png"/>' +
			'<h3>Web</h3>');
	}

	if (local.facebook) {
		$('#linkList').append('<li><a href="' + local.facebook + '" target="_new">' +
			'<img src="img/icons/facebook.png"/>' +
			'<h3>Facebook</h3>');
	}

	if (local.twitter) {
		$('#linkList').append('<li><a href="' + local.twitter + '" target="_new">' +
			'<img src="img/icons/twitter.png"/>' +
			'<h3>Twitter</h3>');
	}


	$('#linkList').listview('refresh');
	$('#detailsSet').collapsibleset('refresh');
	
}

function displayEventos(data){
	$('#localEventoList li').remove();
		eventos = data.items;
		$.each(eventos, function(index, evento) {
			$('#localEventoList').append('<li><a href="localeventodetails.html?id=' + evento.id + '">' +
					'<h4>' + evento.nombre + '</h4>' +
					'<p>' + evento.inicio + '</p> </a></li>');
		});
		$('#localEventoList').listview('refresh');
}
