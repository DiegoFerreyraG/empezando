angular.module('miModulo',[])
.directive('miDirectiva',  function(){
	// Runs during compile
	return {
		restrict:'AECM',//atributos,Elementos clases o comentarios
		replace: false,
		templateUrl:'directivas/directiva.html',
		scope:{
			//Para que utilize este scope y no el heredado
			libroAutor :"@",//text el & es para función
			libroTitulo : "@"
			libroObjeto : "="//enlace de datos doble
		}
	}
})
.controller('miControladro',  function($scope){
	$scope.libro = {
					autor:'Gabriel García Márquez',
					titulo:'Cien años de soledad',
					publicado: 1967
					};
})