const express = require('express');
const app = express ();

let spiders = require("./data/spiders.json")

console.log(spiders)

app.use(express.static('client'));

app.get("/api/spider/rand", function(req,resp){
    let index = Math.floor(Math.random() * spiders.length)
    resp.send(spiders[index])
})

app.listen(3000)