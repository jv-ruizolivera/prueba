var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function($scope) {
	$scope.textoDinamico = "Hola Mundo";
});

miApp.controller('ControllerEnlaces', function($scope){
	$scope.elementos = [
		{
			"url" : "www.as.com", "link": "AS"
		},
		{
			"url" : "www.marca.com", "link": "Marca"
		},
		{
			"url" : "www.elmundo.es", "link": "El Mundo"
		},
		{
			"url" : "www.elpais.es", "link": "El Pais"
		}
	]

	$scope.posClick = function(){
		event.preventDefault();
		alert(event.pageY);
	}


});

miApp.controller('controllerClick', function($scope){
	$scope.posClick = function(){
		alert(event.pageY);
	}
});