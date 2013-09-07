var locales;

$('#localListPage').bind('pageinit', function(event) {
	getLocalList();
});

function getLocalList() {
	$.getJSON(serviceURL + 'getlocales.php', function(data) {
		$('#localList li').remove();
		locales = data.items;
		$.each(locales, function(index, local) {
			$('#localList').append('<li><a href="localdetails.html?id=' + local.id + '">' +
					'<img src="img/logos/' + local.logo + '"/>' +
					'<h4>' + local.nombre + '</h4>' +
					'<p>' + local.direccion + '</p> </a></li>');
		});
		$('#localList').listview('refresh');
	});
}