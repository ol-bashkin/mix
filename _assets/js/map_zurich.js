function initMap() {
  'use strict';
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.356006, lng: 8.550272},
      zoom: 18,
      disableDefaultUI: true,
      gestureHandling: 'greedy',
      styles: [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    }),
    
    markerSize = new google.maps.Size(150, 90),
    marker = new google.maps.Marker({

      position: {lat: 47.356006, lng: 8.550272},

      icon: {
        url: '../../../_assets/img/_studios/bourg/icons/studio_marker.png',
        size: markerSize,
        scaledSize: markerSize,
        anchor: new google.maps.Point(75, 87)
      },
      optimized: false,
      map: map

    });
  
}