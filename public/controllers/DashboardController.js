function DashboardController($scope, $rootScope, $http, $modal) {

    //I saw examples of this working for people, but didnt grab update from modal for me...
    $rootScope.$on('orderUpdated', function(event, data){
        console.log("Im getting rootScope data from modal controller", data);
    });
    //This should usually go in a Service...
    $http.get('/api/records').success(function(data){
        $scope.records = data;
        //console.log(data);

        angular.forEach($scope.records, function(value){
            //This would be the accurate way to determine dates going back as long as you want
            //I tried for several hours and for some reason, the difference in days was totally wrong
            //I am not sure why.

            //var millisecondsPerDay = 1000 * 60 * 60 * 24;
            //var days = millisBetween / millisecondsPerDay;
            //var millisBetween = dateOrdered.getTime() - now.getTime();
            //var days = millisBetween / millisecondsPerDay;

            //My way I did is a total hack job obviously, but just wanted
            //to get you the correct pink highlighting of orders older than 14 days...
            var orderMonth = value.Parts[0].OrderedOn.split('/')[0];
            var orderDay = value.Parts[0].OrderedOn.split('/')[1];

            var now = new Date().toLocaleString().split(" ");
            var nowMonth = now[0].split('/')[0];
            var nowDay = now[0].split('/')[1];

            value.diff;
            if(orderMonth == nowMonth){
                value.diff = nowDay - orderDay;
                console.log(value.diff);
            }else{
                orderDay = orderDay - 30;
                value.diff = nowDay - orderDay;
                console.log(value.diff);
            }

        });
    });


    $scope.completeOrder = function(id){
        //alert(id);
        $modal.open({
            templateUrl: '/views/modals/myModal.html',
            controller: 'CompleteController',
            resolve: {
                findId: function(){
                return id;
                }
            }
        });
    }
    //Left your scope functions alone...
    // $scope.PartArrived = function (recordId) {
    //     alert("Part marked as received by Mike Rew @ " + new Date().toLocaleString());
    // }

    // $scope.YouCompleteMe = function (recordId) {
    //     $rootScope.$broadcast("ShowCompleteMe");
    // }
}