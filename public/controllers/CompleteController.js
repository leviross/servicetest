function CompleteController($scope, $http, $modalInstance, findId){
    $scope.completed = false;
    $scope.cancel = function(){
        //alert("clicked");
        $modalInstance.close();
    }

    $scope.showId = findId;

    $scope.updateOrder = function(id){
        //Making sure I pulled the id from the view to the modal
        console.log(id, "i pulled in the order id from the modal to the modal controller!!");
        var userName = $scope.username;
        var today = new Date();
        var recordID = id;

        var updateData = {
            name: userName,
            date: today
        }
        //This http call should be in a Service usually...
        $http.put('/api/records/' + recordID, updateData)
        .success(function(data){
            alert("Record was updated successfully!");
            console.log(data);
            //$scope.$emit isnt pushing this up the scope chain and I am not having luck getting an udate to the view
            $scope.$emit('orderUpdated', recordID);
        }).error(function(err){
            console.log(err);
        });

        $modalInstance.close();

    }

}