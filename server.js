const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/client.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/client.js'));
});
app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/style.css'));
});
app.get('/Fontin-Regular.ttf', function(req, res) {
  res.sendFile(path.join(__dirname + '/Fontin-Regular.ttf'));
});

app.use('/', router);
app.listen(process.env.port || 3000);