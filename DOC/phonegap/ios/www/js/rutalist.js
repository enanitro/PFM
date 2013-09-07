var rutas;

$('#rutaListPage').bind('pageinit', function(event) {
	getRutaList();
});

function getRutaList() {
	$.getJSON(serviceURL + 'getrutas.php', function(data) {
		$('#rutaList li').remove();
		rutas = data.items;
		$.each(rutas, function(index, ruta) {
			$('#rutaList').append('<li><a href="rutadetails.html?id=' + ruta.id + '">' +
					'<img src="' + rutasURL + ruta.portada + '"/>' +
					'<h4>' + ruta.nombre + '</h4>' +
					'<p>' + ruta.fecha + '</p> </a></li>');
		});
		$('#rutaList').listview('refresh');
	});
}