var miApp = angular.module('miApp', ['ngRoute']);

miApp.controller('controllerMain', function($scope){
	$scope.saludoInicial = 'Planeta Fútbol';
});

miApp.controller('Realcontroller', function($scope){
	$scope.jugadores = [{nombre: 'Cristiano', nombre: 'Benzema', nombre: 'Bale'}];
});

miApp.controller('atleticoController', function($scope){
	$scope.jugadores = [{nombre: 'Torres', nombre: 'Gabi', nombre: 'Godín'}];
});

miApp.controller('barcelonaController', function($scope){
	$scope.jugadores = [{nombre: 'Suarez', nombre: 'Neymar', nombre: 'Messi'}];
})