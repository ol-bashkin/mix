function initMap() {
  'use strict';
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 46.520288, lng: 6.634417},
      zoom: 19,
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

      position: {lat: 46.520288, lng: 6.634417},

      icon: {
        url: '../../_assets/img/_studios/bourg/icons/studio_marker.png',
        size: markerSize,
        scaledSize: markerSize,
        anchor: new google.maps.Point(75, 87)
      },
      optimized: false,
      map: map

    });
  
}