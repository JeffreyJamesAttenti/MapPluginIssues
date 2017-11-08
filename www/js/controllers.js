angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, $ionicModal) {

    $rootScope.$watch('isMapOpen', function () {
		$scope.isMapOpen = $rootScope.isMapOpen;
	});

})

.controller('PlaylistsCtrl', function($scope, $rootScope, $ionicModal) {

    $rootScope.$watch('isMapOpen', function () {
		$scope.isMapOpen = $rootScope.isMapOpen;
	});

    $scope.onPush = function () {
        // alert('The button was pushed!');
        var modalOptions = {
            scope: $scope,
            backdropClickToClose: false
        };

        $ionicModal.fromTemplateUrl('templates/modalMap.html', modalOptions).then(function (modal) {
            $scope.modal = modal;
            modal.show();
        });
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
