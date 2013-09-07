var map;
var latitud;
var longitud;
var local_nombre;


$('#localMapaPage').live('pageshow', function(event) {
  latitud = getUrlVars()["lat"];
  longitud = getUrlVars()["lng"];
  local_nombre = getUrlVars()["n"];
	getLocalMarkList();
});



function getLocalMarkList() {


	navigator.geolocation.getCurrentPosition (function (pos)
	{
  		var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;

  		getLocalMarkers(lat,lng);
	});

 
}

function getLocalMarkers(lat,lng)
{

  // creacion del mapa y centrado en la ubicacion del local
	var local_latlng = new google.maps.LatLng(latitud, longitud);

  var options = { 
    zoom : 15, 
    center : local_latlng, 
    mapTypeId : google.maps.MapTypeId.ROADMAP 
  };

  var $content = $("#localMapaPage div:jqmData(role=content)");
  $content.height (screen.height - 50);
  map = new google.maps.Map ($content[0], options);


  //marcador de la ubicacion del usuario
  var latlng = new google.maps.LatLng (lat,lng);

  var image = 'img/markers/marker1.png'

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


  // marcador con la ubicacion del local
  var local_latlng = new google.maps.LatLng(latitud, longitud);

  var local_image = 'img/markers/glass.png'

  var local_marker = new google.maps.Marker ( 
  { 
    map : map, 
    animation : google.maps.Animation.DROP,
    position : local_latlng,
    icon : local_image
  });

  var local_infowindow = new google.maps.InfoWindow({
      content: local_nombre
  });

  google.maps.event.addListener(local_marker, 'click', function() {
    local_infowindow.open(map,local_marker);
  });


  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);

}


