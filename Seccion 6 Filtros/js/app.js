angular.module("filtros",[])
.controller("FiltrosController", function($scope){
    $scope.hoy = new Date();
    $scope.dias =  ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
        $scope.personas = [
        {
            'nombre' : 'Diego',
            'nacionalidad': 'Mexicano'
        },
        {
            'nombre' : 'Ivan',
            'nacionalidad': 'Mexicano'
        },
        {
            'nombre' : 'María',
            'nacionalidad': 'Argentina'
        },
        {
            'nombre' : 'Cristian',
            'nacionalidad': 'Colombiano'
        }
    ];
    
    
})

.filter('suspensivos',function(){
    return function(palabra){
        return palabra + '...';
    }
})

.filter('primeraMayusculas', function(){
  return function(palabra){
      return palabra[0].toUpperCase()+palabra.slice(1);
  }  
});