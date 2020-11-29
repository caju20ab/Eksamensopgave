const express = require ('express')
const app = express()
const port = 1000

app.get('/',(req,res) => {
    res.send('adam')
})

app.listen(port, () => {
    console.log ('PORT is running on  http://localhost:${3000}')
})