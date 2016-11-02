angular.module('miApp',[])
.run(function($rootScope){//Corre la aplicación como main
	$rootScope.propiedadRaiz = "Scope Raíz";
})
.controller('controladorExterno', function($scope){
	$scope.propiedadExterna = "Scope Externo";
})

.controller('controladorInterno', function($scope){
	$scope.propiedadInterna = "Scope Interno";

	$scope.mensaje = "Desde este SCOPE podemos ver: " + 
						$scope.propiedadRaiz + " y " +
						$scope.propiedadExterna + " y " +
						$scope.propiedadInterna;
})