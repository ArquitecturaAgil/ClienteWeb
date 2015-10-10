
(function(ng) {
var mainApp = ng.module('mainApp', [
        'ngRoute',
        'emergenciasModule'
]);
        mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/emergencias', {
                        templateUrl: 'src/templates/emergencias.tpl.html',
                        controller: 'emergenciasCtrl',
                        controllerAs: 'ctrl'
                });
            }]);

 })(window.angular);