//Indhentning af express framework og body-parser helper

const express = require ('express')
const bodyParser = require ('body-parser');
//Giver Express et mere simpelt nanv til når jeg skal CRUD endpoints
const app = express()
const path = require ('path')

//Indhenter alle oplysningerne i VIEW mappen, eksempelvis CSS dokumenterne og JS-logikken
app.use(express.static('view'))
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/view/forside.html'))
})



/*const fs = require('fs');
const { response } = require('express');
const { get } = require('http');*/


//Konfigurere express udtrykket "app", med nogle body-parser settings. Og dertil også håndtering af JSON data

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));*/

//Dette er filen vi håndtere de forskellige routes fra

/*const routes = require('./Routes/routes')(app, fs);
*/
const server = app.listen(8080, () => {
    console.log('listening on port %s...', server.address().port);
  });

  

