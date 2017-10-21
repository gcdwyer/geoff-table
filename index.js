var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {

	    res.send("some text");

	});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
