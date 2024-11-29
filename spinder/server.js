const express = require('express');
const app = express ();

let spiders = require("./data/spiders.json")

console.log(spiders)

app.use(express.static('client'));

app.get("/api/spider/rand", function(req,resp){

    
})

app.listen(3000)