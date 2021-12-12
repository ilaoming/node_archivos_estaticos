const express = require('express');
const app = express();
app.use('/static', express.static('assets'));


app.get('/login',function (req,res) {
    res.sendFile(__dirname + "/page/login.html"); 
});

app.listen(8080, function(){
    console.log("Servidor iniciado");
  });