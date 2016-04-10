/**
 * Created by Meelis Tapo on 27.03.2016.
 */
function initialize() {
    var myCenter=new google.maps.LatLng(58.6,25.4);
    var paide =new google.maps.LatLng(58.88,25.57);
    var tartuK=new google.maps.LatLng(58.38,26.72);
    var tartuY=new google.maps.LatLng(58.38,26.71);
    var tallinn=new google.maps.LatLng(59.43,24.75);
    var mapProp = {
        center:myCenter,
        zoom:7,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var markerTartuK=new google.maps.Marker({position:tartuK,});
    var markerTartuY=new google.maps.Marker({position:tartuY,});
    var markerTallinn=new google.maps.Marker({position:tallinn,});
    var markerPaide=new google.maps.Marker({position:paide,});

    markerTartuK.setMap(map);
    markerTartuY.setMap(map);
    markerTallinn.setMap(map);
    markerPaide.setMap(map);

    var infoTartuK = new google.maps.InfoWindow({
        content:"Tartu kesklinna rada"
    });
    var infoTartuY = new google.maps.InfoWindow({
        content:"Tartu Ülikooli ring"
    });
    var infoTallinn = new google.maps.InfoWindow({
        content:"Tallinna vanalinna rada"
    });
    var infoPaide = new google.maps.InfoWindow({
        content:"Paide Special"
    });

    google.maps.event.addListener(markerTartuY, 'click', function() {
        infoTartuY.open(map,markerTartuY);
    });
    google.maps.event.addListener(markerTartuK, 'click', function() {
        infoTartuK.open(map,markerTartuK);
    });
    google.maps.event.addListener(markerTallinn, 'click', function() {
        infoTallinn.open(map,markerTallinn);
    });
    google.maps.event.addListener(markerPaide, 'click', function() {
        infoPaide.open(map,markerPaide);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
