(function(ng){
    var mod = ng.module('emergenciasModule');
    
    mod.service('EmergenciasService', ['Restangular', function(Restangular){
            this.getHistorialByUser = function(numero, prioridad, tipoDoc){
                return Restangular.one("historial", numero).get({prioridad: prioridad, tipoDoc: tipoDoc});                
            };
    }]);
})(window.angular);

