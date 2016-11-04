// Basic levelDB example.
// IMPORTANT: Getting and putting values to increment a counter is not thread-save!
// You will get race-conditions in this example, so you cannot use it in production like that.

var http = require("http");
var levelup = require('levelup'); // + leveldown

var db = levelup('./levelDB/db'); // Will throw an error if DB is already opened by someone else!

http.createServer(function(req, res) {
    res.write("Hello world from Cloud9!\nCounting on you...\n\n");
    db.get("visits", function(err, value) {
        if(err && !err.notFound) {
            console.log(err.type);
            res.end("Error 500: Something went wrong :( Our fault.");
        } else {
            if(err && err.notFound) {
                value = 0;
            }
            var n = parseInt(value, 10) + 1;
            res.write("You are the " + n + ". visitor.\n");
            db.put("visits", n, function(err, value) {
                if(err) {
                    console.log(err.type);
                    res.end("Error 500: Something went wrong :( Our fault.");
                } else {
                    db.db.approximateSize("\x00", "\xff", function(err, size) {
                        if(err) {
                            console.log(err.type);
                            res.end("Error 500: Something went wrong :( Our fault.");
                        } else {
                            res.end("Total DB size: " + size + "byte.");
                        }
                    });
                }
            });
        }
    });
}).listen(process.env.PORT, process.env.IP);