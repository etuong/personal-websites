$(function () {

  $.fn.googleMap = function (params) {
    params = $.extend({
      zoom: 10,
      coords: [41.1, -85.15],
      type: "ROADMAP",
      debug: false,
      langage: "english",
      overviewMapControl: false,
      streetViewControl: false,
      scrollwheel: false,
      mapTypeControl: false
    }, params);

    switch (params.type) {
      case 'ROADMAP':
      case 'SATELLITE':
      case 'HYBRID':
      case 'TERRAIN':
        params.type = google.maps.MapTypeId[params.type];
        break;
      default:
        params.type = google.maps.MapTypeId.ROADMAP;
        break;
    }

    this.each(function () {

      var map = new google.maps.Map(this, {
        zoom: params.zoom,
        center: new google.maps.LatLng(params.coords[0], params.coords[1]),
        mapTypeId: params.type,
        scrollwheel: params.scrollwheel,
        streetViewControl: params.streetViewControl,
        overviewMapControl: params.overviewMapControl,
        mapTypeControl: params.mapTypeControl

      });

      $(this).data('googleMap', map);
      $(this).data('googleLang', params.langage);
      $(this).data('googleDebug', params.debug);
      $(this).data('googleMarker', new Array());
      $(this).data('googleBound', new google.maps.LatLngBounds());
    });

    return this;
  }

});
