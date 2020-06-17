let express = require('express')
let bodyparser = require('body-parser')
const app = express()

var users = [
    {
        username: 'user',
        password: 'password'
    },
    {
        username: 'user1',
        password: 'password1'
    }
]


//Chargement du dossier frontAngular
app.use(express.static(__dirname+'/frontAngular'))


app.use(bodyparser.json())

app.get('/',function(req,res){
    return res.sendFile(__dirname+'/frontAngular/index.html')
})

app.post('/login',function(req,res){
    //Donnees du front end angular
    const {username,password} = req.body
    //Recherche de l utilisateur dans la bdd
    var userInDb = users.find(user=>{
        return user.username == username && user.password ==password
    })
    //Si il y a utilisateur
    if (userInDb){
        return res.send({message:"Login success"})
    }
    //Si il n y a pas d utilisateur
    else{
        return res.send({message:"Login fail"})
    }
})


app.post('/addUser',function(req,res){
    const{username,password} = req.body;
    //Ajout d utilisateur
    users.push({
        username:username,
        password:password
    })
    return res.send({users:users})
})

app.get('/getUsers',function(req,res){
    return res.send({users:users})
})

app.listen(3000,function(){
    console.log('Serveur connecte')
})