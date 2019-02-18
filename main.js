// alert("Welcome")

function initMap() {
    var myLatLng = {lat: 29.627118, lng: -95.464592};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

