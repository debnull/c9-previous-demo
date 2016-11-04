var fs = require("fs");
var express = require("express");
var createNotification = require("./lib/createNotification.js");
var app = express();

var responseFile = fs.readFileSync(__dirname + "/response.html");

app.use(express.static(__dirname + "/public", { maxAge: (1000 * 60 * 60 * 24)}));

app.get("/", function(req, res){
    res.send(responseFile.toString());
});

app.get("/notifications/notification.xml", function(req, res) {
    console.log("%s : Getting notification request.", (new Date()));
    var notification = createNotification("Test at " + (new Date()), "https://demo-project-c9-philippwiddra.c9.io/images/500.jpg");
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(notification);
});

app.listen(process.env.PORT, process.env.IP);

console.log("Server started.");