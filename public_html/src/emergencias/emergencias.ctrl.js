(function(ng){
    
    var emergencias = ng.module('emergenciasModule');
    
    emergencias.controller('emergenciasCtrl', ['$scope', 'EmergenciasService',function($scope, svc){
        $scope.show = false;
        $scope.historial;
        $scope.send = function(numero, prioridad, tipoDoc){
            svc.getHistorialByUser(numero, prioridad, tipoDoc).then(function(data){
                $scope.historial = data;
                $scope.show = true;
            });
        };    
        $scope.back = function(){
            $scope.show = false;            
        };    
            
    }]);
    
       
    
})(window.angular);


