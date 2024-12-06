const express = require('express');
const fs = require('fs');

const app = express ();

let spiders = require("./data/spiders.json")

console.log(spiders)

app.use(express.json());
app.use(express.static('client'));

app.get("/api/spider/rand", function(req,resp){
    let index = Math.floor(Math.random() * spiders.length)
    resp.send(spiders[index] )
})

app.post("/api/spider/add", function(req, resp){
    // make new spider
    let name = req.body.name
    let bio = req.body.bio
    let imageURL = req.body.image_url
    let newSpider = {"name": name, "bio": bio, "imageURL": imageURL}
    console.log("new spider")
    console.log(newSpider)
    spiders.push(newSpider)
    let spidersText = JSON.stringify(spiders)
    fs.writeFileSync('./data/spiders.json', spidersText);
}

)

app.listen(3000)