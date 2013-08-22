$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getlocal.php?id='+ id, displayLocal);
});

function displayLocal(data) {
	var local = data.item;
	console.log(local);
	$('#localImg').attr('src', 'pics/' + local.portada);
	$('#nombre').text(local.nombre);

	$('#actionList').append('<li><a href="https://maps.google.es/?q=' + local.latitud + ' '  + local.longitud + ' "><h3>Ubicacion</h3>' +
				'<p>' + local.ubicacion + '</p></a></li>');

	}
	if (local.descripcion) {
		$('#actionList').append('<li> <h3>Descripcion</h3>' +
				'<p>' + local.descripcion + '</p></a></li>');
	}
	
	}
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
