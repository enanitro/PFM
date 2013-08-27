var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var eventos;

$('#desListPage').bind('pageinit', function(event) {
	getDesList();
});

function getDesList() {
	$.getJSON(serviceURL + 'geteventos.php', function(data) {
		$('#desList li').remove();
		locales = data.items;
		$.each(locales, function(index, local) {
			$('#desList').append('<li><a href="localdetails.html?id=' + local.id + '">' +
					'<img src="pics/' + local.portada + '"/>' +
					'<h4>' + local.nombre + '</h4>' +
					'<p>' + local.inicio + '</p> </a></li>');
		});
		$('#desList').listview('refresh');
	});
}