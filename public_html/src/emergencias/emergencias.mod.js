(function (ng) {
    var mod = ng.module('emergenciasModule', ['restangular', 'ui.bootstrap']);
    
    mod.constant('host', 'http://157.253.204.45:8080/cordinadorServicios/');
    mod.config(['RestangularProvider','host', function (rp, host) {
            rp.setBaseUrl(host + 'webservice');           
        }]);
})(window.angular);