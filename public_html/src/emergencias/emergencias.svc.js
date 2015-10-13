(function(ng){
    var mod = ng.module('emergenciasModule');
    
    mod.service('EmergenciasService', ['Restangular', function(Restangular){
            this.getHistorialByUser = function(numero, prioridad, tipoDoc){
                return Restangular.one("historiaClinica", numero).customGET(prioridad);                
            };
    }]);
})(window.angular);

