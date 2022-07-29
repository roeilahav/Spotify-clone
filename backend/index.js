var fs = require('fs');
var path = require('path');

// json file with the songs list
var data = fs.readFileSync(path.resolve(__dirname, "songs.json"));

var elements = JSON.parse(data);
const express = require("express");
const app = express();

// To solve the cors issue
const cors=require('cors');

var port = 8080;
app.listen(port, () => console.log(`Server Start at the Port: ${port}`));
	
app.use(express.static('public'));
app.use(cors());

// when get request is made, alldata() is called
app.get('/songs', alldata);

function alldata(request, response) {	
	// Returns all information about the elements
	response.send(elements);
}
