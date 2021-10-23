let http = require("http");

let express = require("express");

let app = express();

app.use(express.static('./Site'));

var server = http.createServer(app);

server.listen(3000);

console.log("a")