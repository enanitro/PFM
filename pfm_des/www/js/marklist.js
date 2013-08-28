var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var map

/*
$('#mapaPage').bind('pageinit', function(event) {
	getMarkList();
});
*/

$('#mapaPage').live('pageshow', function(event) {
  getMarkList();
});

function getMarkList() {


	navigator.geolocation.getCurrentPosition (function (pos)
	{
  		var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;

  		getMarkers(lat,lng);
	});

 
}

function getMarkers(lat,lng)
{
	var latlng = new google.maps.LatLng (lat,lng);

  var options = { 
    zoom : 15, 
    center : latlng, 
    mapTypeId : google.maps.MapTypeId.ROADMAP 
  };
  var $content = $("#mapaPage div:jqmData(role=content)");
  $content.height (screen.height - 50);
  map = new google.maps.Map ($content[0], options);

  var marker = new google.maps.Marker ( 
  { 
    map : map, 
    animation : google.maps.Animation.DROP,
    position : latlng
  });

  var infowindow = new google.maps.InfoWindow({
      content: "Mi ubicacion"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });


  $.getJSON(serviceURL + 'getmarks.php', function(data) {
      marks = data.items;
      $.each(marks, function(index, mark) {

        var latlng = new google.maps.LatLng(mark.latitud, mark.longitud);

        var marker = new google.maps.Marker ( 
        { 
          map : map, 
          animation : google.maps.Animation.DROP,
          position : latlng
        });

        var infowindow = new google.maps.InfoWindow({
            content: mark.nombre
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      });
    });

}

