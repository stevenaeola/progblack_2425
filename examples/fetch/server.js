const express = require('express');
const app = express();

let instruments = [ 'piano', 'concertina', 'double bass'];

app.use(express.static('client'));

app.get('/list', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);
