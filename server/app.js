var express = require('express');
const path = require('path');
var app = express();

app.get("/", function(req,res){
   res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/pagina1", function(req,res){
    res.send("<h1>Pagina1</h1>");
});

app.listen(3000,function(){
    console.log("Server attivo sulla porta 3000");
});