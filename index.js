
const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

// content-type - application/json
app.use(express.json());
//  content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const fs = require('fs');
app.get('/configValue', (req, res) => {
  fs.readFile('/config/configValue', function(err,data){
	res.writeHead(200);
    res.end(data);
  });
});
app.get('/secretValue', (req, res) => {
  fs.readFile('/secret/secretValue', function(err,data){
	res.writeHead(200);
    res.end(data);
  });
});

app.get('/envValue', (req, res) => {
  res.send(process.env.envValue);
});


app.listen(PORT, () => {
	console.log(`Running on localhost with port: ${PORT}`);
});
