var map;


$('#mapaPage').bind('pageinit', function(event) {
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

  //map = new google.maps.Map(document.getElementById("map_canvas"), options);


  var $content = $("#mapaPage div:jqmData(role=content)");
  $content.height (screen.height - height_menu);
  map = new google.maps.Map ($content[0], options);

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


  $.getJSON(serviceURL + 'getmarks.php', function(data) {
      marks = data.items;
      $.each(marks, function(index, mark) {

        var latlng = new google.maps.LatLng(mark.latitud, mark.longitud);

        var image = markersURL + 'glass.png'

        var marker = new google.maps.Marker ( 
        { 
          map : map, 
          animation : google.maps.Animation.DROP,
          position : latlng,
    	  icon : image
        });

        var infowindow = new google.maps.InfoWindow({
            content: mark.nombre
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      });
    });

  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center);

}

