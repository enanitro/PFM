$('#eventoPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getevento.php?id='+ id, displayEvento);
});



function displayEvento(data) {
	var evento = data.item;
	console.log(evento);

	if (evento.local_id) {
		$('#localHref').attr('href', 'localdetails.html?id=' + evento.local_id);		
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
				'<div id="cartel"></div></div>');
		$('#cartel').attr('src', 'pics/' + evento.cartel);
	}

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
