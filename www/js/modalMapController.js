angular.module('starter.controllers').controller('ModalMapController', function ($scope, $rootScope, $timeout) {
    function addMarkerToMap(map) {
        var markerOptions = {
            position: { lat: 0, long: 0 },
            flat: false
        };

        map.addMarker(markerOptions, function(marker) {
            window.mapDebug.marker = marker;
            var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();
            window.mapDebug.htmlInfoWindow = htmlInfoWindow;
            var htmlContent = '<div style="width:220px;line-height:1.35;color:#676767;padding:10px;"><h1>Some junk and stuff.<h1></div>';
            htmlInfoWindow.setContent(htmlContent);

            marker.on(plugin.google.maps.event.MARKER_CLICK, function () {
                htmlInfoWindow.open(marker);
            });

            var iconSize = { width: 20, height: 20 };

            // Anchor to the middle of the image so it stays put!
            var anchorX = Math.floor(iconSize.width / 2);
            var anchorY = Math.floor(iconSize.height / 2);
            var iconAnchor = [anchorX, anchorY];

            marker.setIcon({
                url: 'www/img/led-green.gif',
                size: iconSize,
                anchor: iconAnchor
            });
        });
    }

    document.addEventListener('deviceready', function () {
        // Had to do a timeout because this fired before the mapDiv element existed.
        $timeout(function() {
            var div = document.getElementById("mapDiv");
            $scope.map = plugin.google.maps.Map.getMap(div);

            // Also set a reference on window object so we can do any debugging with dev tools that we need to.
            window.mapDebug = { map: $scope.map };

            $scope.map.one(plugin.google.maps.event.MAP_READY, addMarkerToMap);
            $rootScope.isMapOpen = true;
            var sidemenu = document.getElementsByTagName('ion-side-menu')[0];
            sidemenu.style.display = 'none';
        }, 200);
    });

    $scope.destroy = function () {
        $scope.modal.remove();
        $rootScope.isMapOpen = false;
    };
});
