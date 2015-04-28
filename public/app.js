
var app = angular.module('MCS_ServiceApp', ['ngRoute', 'ngResource', 'ngSanitize']).config(function () {
    // so we can render html without the sanitization
    //$sceProvider.enabled(false);
});

app.controller("MasterController", function ($scope, $rootScope, $location) {

});

app.config(function ($routeProvider) {

    $routeProvider.when("/dashboard/", {
        templateUrl: "views/dashboard.html"
    }).when("/record/:id?", {
        templateUrl: "views/record.html"
    }).otherwise({
      redirectTo: ''
  });

});