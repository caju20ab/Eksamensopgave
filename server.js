//Indhentning af express framework og body-parser helper

const express = require ('express')
const bodyParser = require ('body-parser');
//Giver Express et mere simpelt nanv til når jeg skal CRUD endpoints
const app = express()
const path = require ('path')


const userController = require('./Controller/userController');

app.get('/', userController.userController)

//Indhenter alle oplysningerne i VIEW mappen, eksempelvis CSS dokumenterne og JS-logikken
app.use(express.static('model'))
app.use(express.static('view'))

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/view/html/forside.html'))
})
//app.post('/user', userController.addNewUser);












app.get ('/login', function (req, res){
    res.sendFile(path.join(__dirname + '/view/html/login.html'))
}
)


const server = app.listen(8080, () => {
    console.log('listening on port %s...', server.address().port);
  });

  

