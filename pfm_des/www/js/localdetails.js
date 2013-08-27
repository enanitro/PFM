$('#localPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getlocal.php?id='+ id, displayLocal);
});



function displayLocal(data) {
	var local = data.item;
	console.log(local);
	$('#localImg').attr('src', 'pics/' + local.portada);


	if (local.descripcion) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Descripcion</h3>' + 
				'<p>' + local.descripcion + '</p></div>');		
	}

	if (local.ubicacion) {
		$('#detailsSet').append('<div data-role="collapsible" data-collapsed="true"><h3>Localizacion</h3>' + 
				'<p>' + local.ubicacion + '</p></div>');
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

	
	if (local.ubicacion) {
		$('#linkList').append('<li><a href="https://maps.google.es/?q=' + local.latitud + ' ' + local.longitud + '" target="_new"><h3>Google Maps</h3>');
	}

	if (local.web) {
		$('#linkList').append('<li><a href="' + local.web + '" target="_new"><h3>Web</h3>');
	}

	if (local.facebook) {
		$('#linkList').append('<li><a href="' + local.facebook + '" target="_new"><h3>Facebook</h3>');
	}

	if (local.twiter) {
		$('#linkList').append('<li><a href="' + local.twiter + '" target="_new"><h3>Twiter</h3>');
	}


	


	/*$('#actionList').append('<li><a href="https://maps.google.es/?q=' + local.latitud + ' ' + local.longitud + '" target="_new"><h3>Ubicacion</h3>' +
				'<p>' + local.ubicacion + '</p></a></li>');

	if (local.descripcion) {
		$('#actionList').append('<li> <h3>Descripcion</h3>' +
				'<p>' + local.descripcion + '</p></a></li>');
	}*/

	$('#linkList').listview('refresh');
	$('#detailsSet').collapsibleset('refresh');
	$('#actionList').listview('refresh');

	

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
