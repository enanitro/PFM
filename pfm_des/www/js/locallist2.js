var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var locales;

$('#localListPage2').bind('pageinit', function(event) {
	getLocalList2();
});

function getLocalList2() {
	$.getJSON(serviceURL + 'getlocales.php', function(data) {
		$('#localList2 li').remove();
		locales = data.items;
		$.each(locales, function(index, local) {
			$('#localList2').append('<li><a href="localdetails.html?id=' + local.id + '">' +
					'<img src="pics/' + local.portada + '"/>' +
					'<h4>' + local.nombre + '</h4>' +
					'<p>' + local.ubicacion + '</p> </a></li>');
		});
		$('#localList2').listview('refresh');
	});
}