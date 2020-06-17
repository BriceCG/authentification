app.service('userService',function($http,rx,$rootScope){
    //fonction qui ajoute l utilisateur
    this.addUser = function(username,password){
        return $http({
            method:'post',
            url: '/addUser',
           
            data:{
               username:username,
               password:password
            }
        })
    }
    //Fonction qui recupere les utilisateurs
    this.getUser = function(){
        return rx.Observable
        .fromPromise
        ($http({
            method: 'get',
            url: '/getUsers',
        }))
        .map(function(response){
            return response
        })
    }
    
    //Fonction qui met a jour les utilisateurs quand on ajoute
    this.nextUser = function(){
       return  $rootScope.$toObservable('userObservable')
        .flatMapLatest(this.getUser)
        .distinctUntilChanged()
       
    }
})