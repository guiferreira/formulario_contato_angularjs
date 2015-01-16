

var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function ($scope,$http) {
	$scope.salveSubmit = function(){
		/*alert(
				$scope.user.nome + '\n' +
				$scope.user.email + '\n' +
				$scope.user.mensagem + '\n'

		);*/

		$http({
	      url: 'mail.php',
	      method: 'POST',
	      data: {
	        'nome': $scope.user.nome,
	        'email': $scope.user.email,
	        'mensagem': $scope.user.email,
	        
	      },
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	        
	      }
	      
	    }).
	    success(function (data) {
	    	$scope.success = true;
	    	//exemplo de retorno: alert(data['email']);
	    	$scope.user = {};
	    }).
	    error(function (data) {
	    	$scope.error = true;
	    	
	    });	
		
	}
	

});