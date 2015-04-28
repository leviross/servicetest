function DashboardController($scope, $rootScope) {

    $scope.PartArrived = function (recordId) {
        alert("Part marked as received by Mike Rew @ " + new Date().toLocaleString());
    }

    $scope.YouCompleteMe = function (recordId) {
        $rootScope.$broadcast("ShowCompleteMe");
    }
}