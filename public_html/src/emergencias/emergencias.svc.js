(function(ng){
    var mod = ng.module('emergenciasModule');
    
    mod.service('EmergenciasService', ['Restangular', function(Restangular){
            this.getHistorialByUser = function(cedula, prioridad){
                return Restangular.one("historial", cedula).get({prioridad: prioridad});                
            };
    }]);
})(window.angular);

