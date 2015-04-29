function DashboardController($scope, $rootScope, $http, $modalInstance) {
    //var scope = this;

    // console.log("DashboardController on!");
    $scope.fourteenDays = false;

    $http.get('/api/records').success(function(data){
        $scope.records = data;
        console.log(new Date());

        var differenceInDays = function(){
            var dt1 = datafirstdate.split('/'),
                dt2 = new Data();
                one = new Date(dt1[2], dt1[1], dt1[0]),
                two = new Date(dt2[2], dt2[1], dt2[0]);

        }

    });

    $scope.dayCounter = function(dateOrdered){
        var ordered = dateOrdered.split('/');
        var now = new Date();
    }

    $scope.completeOrder = function(){
        $modalInstance.open({
            templateUrl: '/views/modals/complete.html',
            controller: 'CompleteOrderCtrl'
        });
    }



    $scope.PartArrived = function (recordId) {
        alert("Part marked as received by Mike Rew @ " + new Date().toLocaleString());
    }

    $scope.YouCompleteMe = function (recordId) {
        $rootScope.$broadcast("ShowCompleteMe");
    }
}