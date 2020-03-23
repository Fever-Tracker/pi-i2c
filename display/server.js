const d3 = require("d3");
const express = require('express');
const path = require('path');
const process = require('process');

const PORT = 8080

var app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.post('/update', (req, res) => {res.json(poll);});
app.set('port', PORT);
app.listen(app.get('port'), () => { console.log(`Listening on ${ PORT }`); });
