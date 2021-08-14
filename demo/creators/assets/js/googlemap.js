var myCenter=new google.maps.LatLng(37.3318331,-121.8917949); // enter your values here
var marker;

function initialize() {
	var mapProp = {
	  center:myCenter,
	  zoom:16,
	  scrollwheel: false,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker=new google.maps.Marker({
	  position:myCenter
	  });

	var infowindow = new google.maps.InfoWindow({
	  content:"WE ARE HERE!" // editable content
	  });

	infowindow.open(map,marker);
	marker.setMap(map);
}		
google.maps.event.addDomListener(window, 'load', initialize);