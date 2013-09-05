var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var map;


$('#rutaMapaPage').live('pageshow', function(event) {
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

        var image = 'markers/red' + i + '.png' //'markers/glass.png'

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

      var image = 'markers/marker1.png'

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



function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

