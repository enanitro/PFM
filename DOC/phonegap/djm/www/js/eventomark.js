var map;
var latitud;
var longitud;
var evento_nombre;


$('#eventoMapaPage').live('pageshow', function(event) {
  latitud = getUrlVars()["lat"];
  longitud = getUrlVars()["lng"];
  evento_nombre = getUrlVars()["n"];
	getEventoMarkList();
});



function getEventoMarkList() {


	navigator.geolocation.getCurrentPosition (function (pos)
	{
  		var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;

  		getEventoMarkers(lat,lng);
	});

 
}

function getEventoMarkers(lat,lng)
{

  // creacion del mapa y centrado en la ubicacion del evento
	var evento_latlng = new google.maps.LatLng(latitud, longitud);

  var options = { 
    zoom : 15, 
    center : evento_latlng, 
    mapTypeId : google.maps.MapTypeId.ROADMAP 
  };

  var $content = $("#eventoMapaPage div:jqmData(role=content)");
  $content.height (screen.height - height_menu);
  map = new google.maps.Map ($content[0], options);


  //marcador de la ubicacion del usuario
  var latlng = new google.maps.LatLng (lat,lng);

  var image = markersURL + 'marker1.png'

  var marker = new google.maps.Marker ( 
  { 
    map : map, 
    animation : google.maps.Animation.DROP,
    position : latlng,
    icon : image
  });

  var infowindow = new google.maps.InfoWindow({
      content: "Mi ubicacion"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });


  // marcador con la ubicacion del evento
  //var evento_latlng = new google.maps.LatLng(latitud, longitud);

  var evento_image = markersURL + 'glass.png'

  var evento_marker = new google.maps.Marker ( 
  { 
    map : map, 
    animation : google.maps.Animation.DROP,
    position : evento_latlng,
    icon : evento_image
  });

  var evento_infowindow = new google.maps.InfoWindow({
      content: evento_nombre
  });

  google.maps.event.addListener(evento_marker, 'click', function() {
    evento_infowindow.open(map,evento_marker);
  });


  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);

}


