var eventos;

$('#eventoListPage').bind('pageinit', function(event) {
	getEventoList();
});

function getEventoList() {
	$.getJSON(serviceURL + 'geteventos.php', function(data) {
		$('#eventoList li').remove();
		locales = data.items;
		$.each(locales, function(index, local) {
			$('#eventoList').append('<li><a href="eventodetails.html?id=' + local.id + '">' +
					'<img src="' + logosURL + local.logo + '"/>' +
					'<h4>' + local.nombre + '</h4>' +
					'<p>' + local.inicio + '</p> </a></li>');
		});
		$('#eventoList').listview('refresh');
	});
}