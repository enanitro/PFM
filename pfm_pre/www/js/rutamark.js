var map;


$('#rutaMapaPage').live('pageshow', function(event) {
	getRutaMarkList();
});



function getRutaMarkList() {


	navigator.geolocation.getCurrentPosition (function (pos)
	{
  		var lat = pos.coords.latitude;
  		var lng = pos.coords.longitude;

  		getRutaMarkers(lat,lng);
	});

 
}

function getRutaMarkers(lat,lng)
{	

  // markers para la ubicacion de los locales
  var control = true;
  var id = getUrlVars()["id"];
  $.getJSON(serviceURL + 'getrutamark.php?id='+ id, function(data) {
      marks = data.items;
      var i = 1
      $.each(marks, function(index, mark) {

        //centramos el mapa en el primer local
        if (control){
          var centro = new google.maps.LatLng (mark.latitud, mark.longitud);

          var options = { 
            zoom : 15, 
            center : centro, 
            mapTypeId : google.maps.MapTypeId.ROADMAP 
          };

          var $content = $("#rutaMapaPage div:jqmData(role=content)");
          $content.height (screen.height - 50);
          map = new google.maps.Map ($content[0], options);

          control = false; // false para no volver a acceder al centrado del mapa
        }

        // creamos el marker
        var latlng = new google.maps.LatLng(mark.latitud, mark.longitud);

        var image = 'img/markers/red' + i + '.png' //'markers/glass.png'

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

        i = i + 1;

      });

      // marker para la ubicacion del usuario
      var latlng = new google.maps.LatLng (lat, lng);

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



      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
  
    });

}

