(function(ng){
    
    var emergencias = ng.module('emergenciasModule');
    
    emergencias.controller('emergenciasCtrl', ['$scope', 'EmergenciasService',function($scope, svc){
            
        $scope.send = function(cedula, prioridad){
            svc.getHistorialByUser(cedula, prioridad).then(function(data){
                alert(data);
            });
        };    
            
            
    }]);
    
       
    
})(window.angular);


