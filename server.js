//Indhentning af express framework og body-parser helper

const express = require ('express')
const bodyParser = require ('body-parser');
//Giver Express et mere simpelt nanv til når jeg skal CRUD endpoints
const app = express()

const fs = require('fs');

//Konfigurere express udtrykket "app", med nogle body-parser settings. Og dertil også håndtering af JSON data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Dette er filen vi håndtere de forskellige routes fra

const routes = require('./Routes/routes')(app, fs);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
  });

