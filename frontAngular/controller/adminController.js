app.controller('adminController', function ($uibModal, $scope, userService, $rootScope) {
    //A la chargement de la page on recupere les users
    getUser()

    //Ouverture du modal
    $scope.openModal = function () {
        console.log('open')
        //Ouverture du modal
        $uibModal.open({
            templateUrl: './template/modal.html',
            controller: function ($scope, $uibModalInstance) {
                //Fermeture du modal
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
                //Ajout des utilisateurs
                $scope.addUser = function () {
                    //Appel du service ajout des utilisateurs
                    userService.addUser($scope.username, $scope.password)
                        .then(function (response) {
                            //Mis a jour des utilisateurs
                            $rootScope.userObservable++
                            userService.nextUser()
                            getUser()
                            //Fermeture du modal apres ajout utilisateur
                            $uibModalInstance.dismiss()
                        })

                }
            }

        })
    }

   function getUser(){
    userService.nextUser()
    .subscribe(function (response) {
        //Mis a jour des utilisateur dans angular
        $scope.users = response.data.users
        console.log($scope.users)
        //Mis a jour des utilisateurs dans HTML 
        $rootScope.$apply()
    })
    }
})