var serviceURL = "http://pfm-jereznoche.hol.es/pfm_des/services/";

var marks;


$('#mapaPage').bind('pageinit', function(event) {
	getMarkList();
});



$('#mapaPage').live('pageshow',function(event, ui){
    google.maps.event.trigger('map_canvas', 'resize');
});


function getMarkList() {

var poi = "33.89342,-84.30715",
    poimg = "http://www.findthebestcarprice.com/public/images/how-to-buy-a-car.png";

$('#map_canvas').gmap({
        'zoom': 7
    }).bind('init', function() {
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

}

