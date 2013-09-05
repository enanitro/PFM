var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var marks;

var lat;
var lng;

$('#mapaPage').live('pageshow',function(event, ui){
    buildResultMap('#map_canvas');
});

$('#mapaPage').bind('pageinit', function(event) {
	getMarkList();
});

function getMarkList() {

	/*
	$('#map_canvas').gmap().bind('init', function(event, map) { 

		$('#map_canvas').gmap('addMarker', { 
				'position': new google.maps.LatLng(40.426565,-3.701813), 
				'bounds': true 
			}).click(function() {
				$('#map_canvas').gmap('openInfoWindow', { 'content': "Aki" }, this);
		});


		$.getJSON(serviceURL + 'getmarks.php', function(data) {
			marks = data.items;
			$.each(marks, function(index, mark) {
				$('#map_canvas').gmap('addMarker', { 
					'position': new google.maps.LatLng(mark.latitud, mark.longitud), 
					'bounds': true 
				}).click(function() {
					$('#map_canvas').gmap('openInfoWindow', { 'content': mark.nombre }, this);
				});
			});
		});

	});
	*/


var poi = "33.89342,-84.30715",
    poimg = "http://www.findthebestcarprice.com/public/images/how-to-buy-a-car.png";

$('#map_canvas').gmap({
        'zoom': 7
    }).bind('init', function(event, map) {
        $('#map_canvas').gmap('addMarker', {
            'position': poi,
            'bounds': true
        }).click(function() {
            content = '<img src="' + poimg + '" style="float:left;margin-right:5px"><div>Title<div style="font-weight:normal;font-size:x-small">Text details</div></div>';
            $('#map_canvas').gmap('openInfoWindow', {
                'content': content
            }, this);
        });
    });
});



}

function currentLocation(lat,lng)
{
	var latlng = new google.maps.LatLng (lat,lng);


  var options = { 
    zoom : 15, 
    center : latlng, 
    mapTypeId : google.maps.MapTypeId.ROADMAP 
  };
  var $content = $("#mapaPage div:jqmData(role=content)");
  $content.height (screen.height - 50);
  var map = new google.maps.Map ($content[0], options);

  new google.maps.Marker ( 
  { 
    map : map, 
    animation : google.maps.Animation.DROP,
    position : latlng  
  });
}
