(function (ng) {
    var mod = ng.module('emergenciasModule', ['restangular', 'ui.bootstrap']);

    mod.config(['RestangularProvider', function (rp) {
            rp.setBaseUrl('webresources');
        }]);
})(window.angular);