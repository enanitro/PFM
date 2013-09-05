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
		$('#eventoImg').attr('src', 'pics/' + evento.portada);
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
				'<img src="pics/' + evento.cartel +' " style="max-height: 100%; max-width: 100%" /></div>');
	}


	if ((evento.latitud) && (evento.longitud)) {
		//$('#linkList').append('<li><a href="https://maps.google.es/?q=' + evento.latitud + ' ' + evento.longitud + '" target="_new">' +
		$('#linkList').append('<li><a href="eventomap.html?lat=' + evento.latitud + '&lng=' + evento.longitud + '&n=' + evento.local + '">' +
			'<img src="icons/maps.png"/>' +
			'<h3>Mapa</h3>');
	}

	if ((evento.local_id) && (evento.nombre)) {
		$('#linkList').append('<li><a href="eventolocaldetails.html?id=' + evento.local_id + '">' +
			'<img src="pics/' + evento.logo +'"/>' +
			'<h3>' + evento.local + '</h3>');
	}

/*
	if (evento.web) {
		$('#linkList').append('<li><a href="' + evento.web + '" target="_new">' +
			'<img src="icons/web3.png"/>' +
			'<h3>Web</h3>');
	}

	if (evento.facebook) {
		$('#linkList').append('<li><a href="' + evento.facebook + '" target="_new">' +
			'<img src="icons/facebook.png"/>' +
			'<h3>Facebook</h3>');
	}

	if (evento.twitter) {
		$('#linkList').append('<li><a href="' + evento.twitter + '" target="_new">' +
			'<img src="icons/twitter.png"/>' +
			'<h3>Twitter</h3>');
	}
*/

	$('#linkList').listview('refresh');
	$('#detailsSet').collapsibleset('refresh');

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
