const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('./views/home.html',{root:__dirname});
})

app.get('/about', function (req, res) {
    res.sendFile('./views/about.html',{root:__dirname});
  })
  app.use((req, res) => {
    res.statusCode(404).sendFile('./views/404.html',{root:__dirname});
})
app.listen(3000,() => {
    console.log("Sever is running on port 3000")
})