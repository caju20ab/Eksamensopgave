var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         document.getElementById("#Login").innerHTML = xhttp.responseText;
      }
  };
  xhttp.open("GET", "forside.html", true);
  xhttp.send();
/*








/*const userRoutes = (app, fs) => {
    //Variabel
    const dataPath = ('./data/users.json')

    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
            throw err;
          }
    
          callback(returnJson ? JSON.parse(data) : data);
        });
      };

      const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
          if (err) {
            throw err;
          }
    
          callback();
        });
      };



    //Read (POST)
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });

      //Create (POST)

      // CREATE
     app.post('/users', (req, res) => {
     readFile(data => {
      const newUserId = Object.keys(data).length + 1;
  
      // add the new user
      data[newUserId] = req.body;
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new user added');
      });
    }, true);
    });
    };
module.exports = userRoutes*/
