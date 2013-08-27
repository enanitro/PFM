var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var eventos;

$('#eventolListPage').bind('pageinit', function(event) {
	getLocalList2();
});

function getLocalList2() {
	$.getJSON(serviceURL + 'getlocales.php', function(data) {
		$('#eventoList li').remove();
		locales = data.items;
		$.each(locales, function(index, local) {
			$('#eventoList').append('<li><a href="localdetails.html?id=' + local.id + '">' +
					'<img src="pics/' + local.portada + '"/>' +
					'<h4>' + local.nombre + '</h4>' +
					'<p>' + local.ubicacion + '</p> </a></li>');
		});
		$('#eventoList').listview('refresh');
	});
}