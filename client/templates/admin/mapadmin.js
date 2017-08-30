if (Meteor.isClient) {
  var MAP_ZOOM = 15;
  //loaded-api google-map
 Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyC-Rx3HLQNUL8l56SAoKwGOAXD5vwn3URQ', libraries: 'geometry,places' });
  });

 Template.map.onRendered(function() {

   GoogleMaps.ready('map', function(map) {
      let marker = new google.maps.Marker({});
      google.maps.event.addListener(map.instance, 'click', function(event) {
        marker.setMap(null);
        console.log(event.latLng.lat(), event.latLng.lng() );
        let lat, lng;
        lat= event.latLng.lat();
        lng = event.latLng.lng();

        //add marker
        marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(lat, lng),
          map: map.instance,
        });
     });

    });
  });

 Template.map.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      return error && error.message;
    },
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });
}
