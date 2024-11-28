const express = require('express');
const app = express ();

app.use(express.static('client'));

// app.get("/",  function(req,resp){
// }
// })

app.listen(3000)