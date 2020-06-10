app.controller('loginController',function($scope,$http,$location){
    $scope.login = function(){
        //Recuperation des identifiants
        username = $scope.username
        password = $scope.password
        //Requete vers backend Node js
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:3000/login',
            data: {
                username: username,
                password: password
            }
        })
        .then(function(msg){
            //Si le login reussi
           if (msg.data.message == 'Login success'){
            $location.path('/admin')
           }
           //Si le login echoue
           else if (msg.data.message == 'Login fail'){
                $scope.error = true
           }
        })
        
    }
})