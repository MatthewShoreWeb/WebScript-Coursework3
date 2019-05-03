'use strict';
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

//Tells server to use the public folder:
app.use(express.static('public'));

//Parses everything in format: application/json:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//Tells the server to listen on port 8080.
app.listen(8080, function(){
  console.log('Server running on port 8080.');
});

//Writes JSON object to JSON file:
function writeToFile(fileLocation, data){
  fs.writeFile(fileLocation, data, function(){
    console.log('File written.');
  });
}

//Handles post requests for the project information:
app.post('/projectInfo', function(req, res){
  let projectInformation = {
     pName: req.body.pName,
     pClient:  req.body.pClient,
     teamMembers:  req.body.teamMembers,
     deadLine:  req.body.dayDeadline + '/' + req.body.monthDeadline + '/' + req.body.yearDeadline,
     pLanguages: req.body.pLanguages
  };
  console.log('Sent data: ');
  console.log(req.body);
  writeToFile('./public/data.json', JSON.stringify(projectInformation));
  res.send('Data sent:' + JSON.stringify(projectInformation));
});

//Handles post requests for the style information:
app.post('/styleInfo', function(req, res){
  let styleInformation = {
    fontSelect: req.body.fontSelect,
    colourSelect: req.body.colourSelect
  };
  console.log('Sent style data:');
  console.log(req.body);
  writeToFile('./public/style.json', JSON.parse(styleInformation));
  res.send('Data sent:' + JSON.stringify(styleInformation));
});
