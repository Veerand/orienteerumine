/**
 * Created by Meelis Tapo on 27.03.2016.
 */
function initialize() {
    var myCenter= new google.maps.LatLng(58.378,26.72);
    var punktA=new google.maps.LatLng(58.38,26.72);
    var punktB=new google.maps.LatLng(58.38,26.71);
    var punktC=new google.maps.LatLng(58.38,26.7135);
    var punktD=new google.maps.LatLng(58.377,26.71);
    var punktE=new google.maps.LatLng(58.375,26.726);
    var punktF=new google.maps.LatLng(58.376,26.719);
    var punktG=new google.maps.LatLng(58.375,26.7215);
    var punktH=new google.maps.LatLng(58.379,26.717);
    var punktI=new google.maps.LatLng(58.377,26.726);
    var punktJ=new google.maps.LatLng(58.378,26.719);
    var punktK=new google.maps.LatLng(58.382,26.718);

    var positions = [punktA, punktB, punktC, punktD, punktE, punktF, punktG, punktH, punktI, punktJ, punktK];

    var mapProp = {
        center:myCenter,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADS
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


    var letter;
    var markers = [];
    for (i = 0; i < positions.length; i++) {
        letter = String.fromCharCode("A".charCodeAt(0) + i)
        markers.push(new google.maps.Marker({position:positions[i],
            icon: "http://maps.google.com/mapfiles/marker" + letter + ".png",
            animation: google.maps.Animation.DROP}))
    }

    for (i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    };




    //var letter, Amarker;
    //letter = String.fromCharCode("A".charCodeAt(0) + index);
    //Amarker = new google.maps.Marker({
    //    map: map,
    //    position: tartuY,
    //    icon: "http://maps.google.com/mapfiles/marker" + letter + ".png",
    //    animation: google.maps.Animation.DROP
    //});
    //
    //
    //Amarker.setMap(map);



}
google.maps.event.addDomListener(window, 'load', initialize);
